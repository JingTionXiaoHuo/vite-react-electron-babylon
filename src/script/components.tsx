import { useState, useEffect, MouseEventHandler } from 'react';
import * as BABYLON from 'babylonjs';
import { path, root, PerlinNoise, canvasResize, isCanvas } from './tool';

import './plugin/babylon/cannon.js';
export function BabylonBox() {
    useEffect(() => {
        const canvas = document.getElementById('babylonCanvas');

        if (isCanvas(canvas)) {
            window.addEventListener("ReactDomRender", () => canvasResize(canvas))
            window.addEventListener("resize", () => canvasResize(canvas));
            createBabylonScene(canvas);
        } else {
            console.log("cannot find canvas")
        }

        return () => {
            if (isCanvas(canvas)) {
                window.removeEventListener("ReactDomRender", () => canvasResize(canvas))
                root.removeEventListener("resize", () => canvasResize(canvas));
            }
        };
    }, []);

    function createBabylonScene(canvas: HTMLCanvasElement) {
        const startTime = new Date().getTime();//记录场景开始时间
        const engine = new BABYLON.Engine(canvas, true); // 初始化 BABYLON 3D engine

        if (document.getElementById('FPS')) {
            let fps = document.getElementById('FPS')!;
            fps.innerHTML = engine.getFps().toFixed() + " fps";
        }

        /******* 定义场景函数 ******/
        let createScene = function () {

            let perlinNosie = new PerlinNoise();
            let scene = new BABYLON.Scene(engine);
            scene.clearColor = new BABYLON.Color4(0, 0, 0, 0);
            scene.enablePhysics(new BABYLON.Vector3(0, -9.8, 0), new BABYLON.CannonJSPlugin(false));

            // 摄像机
            let camera = new BABYLON.ArcRotateCamera("Camera", -Math.PI / 4, Math.PI / 2.5, 10, BABYLON.Vector3.Zero(), scene);
            camera.attachControl(canvas, true);
            camera.minZ = 0.1;

            // 灯光
            const light1 = new BABYLON.PointLight("light1", new BABYLON.Vector3(0, 40, 0), scene);

            // 物理地面
            // var ground = BABYLON.MeshBuilder.CreateSphere("Ground", { diameter: 2 }, scene);
            // ground.position.y = -2;
            // ground.scaling = new BABYLON.Vector3(10, 1, 10);
            // ground.physicsImpostor = new BABYLON.PhysicsImpostor(ground, BABYLON.PhysicsImpostor.SphereImpostor, { mass: 0, friction: 0, restitution: 0.6 });

            // var ball = BABYLON.MeshBuilder.CreateSphere("Ground1", { diameter: 1 }, scene);
            // ball.position.y = 10;
            // ball.physicsImpostor = new BABYLON.PhysicsImpostor(ball, BABYLON.PhysicsImpostor.SphereImpostor, { mass: 1, friction: 0, restitution: 0.9 });

            // 二十面体---------------------
            const icosahedron = BABYLON.MeshBuilder.CreateGeodesic("icosahedron1", { m: 24, n: 2, size: 1.8, updatable: true });
            // icosahedron.position = new BABYLON.Vector3(0, 15, 0);
            // icosahedron.physicsImpostor = new BABYLON.PhysicsImpostor(icosahedron, BABYLON.PhysicsImpostor.MeshImpostor, { mass: 1, restitution: 0.9 });

            // //阴影---------------------
            const generator = new BABYLON.ShadowGenerator(1024, light1);
            generator.usePoissonSampling = true;
            generator.bias = 0.000001;
            generator.blurScale = 1;
            generator.transparencyShadow = true;
            generator.darkness = 0.6;

            generator.addShadowCaster(icosahedron);

            let positions = icosahedron.getVerticesData(BABYLON.VertexBuffer.PositionKind);//顶点位置引用

            let initial_position: BABYLON.FloatArray = [];//复制一份初始状态顶点位置数组
            if (positions) {
                for (let i = 0; i < positions.length; i++) {
                    initial_position.push(positions[i])
                }
            }

            scene.registerBeforeRender(function () {

                const a = new Date().getTime() - startTime;

                if (positions) {
                    for (let i = 0; i < positions.length / 3; i++) {
                        const initial_vector = new BABYLON.Vector3(//将初始网格的每3个坐标组成一个点，创建Vector3对象
                            initial_position[i * 3],
                            initial_position[i * 3 + 1],
                            initial_position[i * 3 + 2]
                        );
                        const perlin = perlinNosie.noise(//perlin值只与当前循环操作的顶点的位置信息相关
                            (initial_vector.x * 0.3) + (a * 0.0002),
                            (initial_vector.y * 0.3) + (a * 0.0003),
                            (initial_vector.z * 0.3)
                        );
                        const ratio = perlin * 1;// 为了控制顶点缩放比例对噪声值做的进一步处理:number
                        positions[i * 3] = initial_vector.x * ratio;
                        positions[i * 3 + 1] = initial_vector.y * ratio;
                        positions[i * 3 + 2] = initial_vector.z * ratio;
                    }
                    icosahedron.updateVerticesData(BABYLON.VertexBuffer.PositionKind, positions);//更新顶点坐标数据
                }
            });

            //将场景内网格添加到阴影渲染队列
            for (let i = 0; i < scene.meshes.length; i++) {
                // console.log(i, scene.meshes[i].name);
                scene.meshes[i].receiveShadows = true;
            }

            return scene;
        };

        let scene = createScene();
        engine.runRenderLoop(function () {
            scene.render();
        });
    };

    return (
        <div id='BabylonBox'>
            <canvas id='babylonCanvas'>
                当前浏览器不支持canvas，尝试更换Google Chrome浏览器尝试
            </canvas>
            <div className="pfs-info">
                FPS: <span id="FPS"></span>
            </div>
        </div>
    );
}

import 'babylonjs-loaders';
import MeshWriter from "./plugin/meshwriter/meshwriter.ES.js";
export function BannerBox() {
    // const imgSize = [[1920, 650], [660, 330], [1110, 450]];
    // const imgName = ['woniuxy.cn.pc', 'woniuxy.cn.mo', 'woniuxy.com.pc'];
    const campusArray = [
        ['成都', '09·22'],
        ['天府', '10·10'],
        ['重庆', '09·19'],
        ['西安', '09·19'],
        ['上海', '09·26'],
        ['武汉', '09·21'],
        ['深圳', '10·10'],
        ['南京', '10·24'],
        ['杭州', '10·18'],
        ['阿多比', '09·26'],
        ['凡云', '09·28']
    ];

    // 按时间顺序对校区数组重排
    for (let i = 0; i < campusArray.length - 1; i++) {
        for (let j = 0; j < campusArray.length - 1 - i; j++) {
            if (campusArray[j][1] > campusArray[j + 1][1]) {
                let temp_array = campusArray[j];
                campusArray[j] = campusArray[j + 1];
                campusArray[j + 1] = temp_array;
            }
        }
    }

    useEffect(() => {

        const root = document.getElementById('root')!;
        const canvas = document.getElementById('BannerCanvas')!;

        !root.classList.contains('fullScreen') ? root.classList.add('fullScreen') : root.classList.remove('fullScreen');

        if (isCanvas(canvas)) {
            canvasResize(canvas, 1920, 650);
            createBabylonScene(canvas);
        }

        //组件卸载时
        return () => { };
    }, []);

    function createBabylonScene(canvas: HTMLCanvasElement) {
        const startTime = new Date().getTime();

        if (isCanvas(canvas)) {
            const engine = new BABYLON.Engine(canvas, true); // 初始化 BABYLON 3D engine

            interface ILoadingScreen {
                //What happens when loading starts
                displayLoadingUI: () => void;
                //What happens when loading stops
                hideLoadingUI: () => void;
                //default loader support. Optional!
                loadingUIBackgroundColor: string;
                loadingUIText: string;
            }

            //自定义加载动画
            function customLoadingScreen(): ILoadingScreen {
                return {
                    displayLoadingUI: () => {

                    },
                    hideLoadingUI: () => {

                    },
                    loadingUIBackgroundColor: '#ffffff',
                    loadingUIText: 'Loading...',
                };
            };
            engine.loadingScreen = customLoadingScreen();

            /******* 定义场景函数 ******/
            let createScene = function () {
                let scene = new BABYLON.Scene(engine);
                scene.ambientColor = new BABYLON.Color3(1, 0, 1);

                // 摄像机
                let camera = new BABYLON.ArcRotateCamera("Camera", Math.PI / 2, Math.PI / 1.970, 12.7, new BABYLON.Vector3(0, 0.66, 3), scene);
                camera.attachControl(canvas, true);
                camera.minZ = 0.1;
                camera.fov = 0.26;
                // var postProcess = new BABYLON.FxaaPostProcess("fxaa", 4, camera);//后期抗锯齿处理

                BABYLON.SceneLoader.AppendAsync("/model/", "banner.gltf", scene,
                    function (event) {
                        // 加载进度计算
                        const percentage = event.lengthComputable ? " " + Math.floor(event.loaded / event.total * 100) + "%" : "";
                        document.getElementById("LoadingProgress")!.innerHTML = percentage;
                        if (Math.floor(event.loaded / event.total * 100) === 100) {
                            var bodyStateClock = setInterval(() => {
                                var loadedTime = new Date().getTime();
                                if (loadedTime - startTime > 2000) {
                                    document.body.classList.contains("loading") && document.body.classList.replace("loading", "completed");
                                    clearTimeout(bodyStateClock);
                                }
                            }, 100);
                        }
                    }).then(() => {
                        let shuidi = scene.meshes[0];
                        for (let i = 0; i < scene.meshes.length; i++) {
                            if (scene.meshes[i].name === "水滴") {
                                shuidi = scene.meshes[i];
                                shuidi.position._y = 10;
                            }
                        }

                        const shuidiArray = [];
                        const shuidiPositionArray = [
                            [-0.750, -0.360, -0.080, +0.400, +0.770, +1.300, +1.860, +2.370, +2.870, 10, 11, 12, 13],
                            [+0.700, +0.730, +1.020, +1.150, +1.250, +1.270, +1.400, +1.440, +1.600, 10, 11, 12, 13],
                            [+11.60, +11.40, +9.000, +7.300, +6.800, +5.600, +4.000, +3.000, +2.000, 10, 11, 12, 13],
                        ];
                        const shuidiRotationArray = [
                            [+1.950, +1.900, +0.001, +1.980, +0.001, +1.900, +1.980, +0.001, +0.001, 10, 11, 12, 13],
                            [+0.150, +1.900, +1.900, +1.680, +0.100, +1.800, +0.001, +0.110, +1.800, 10, 11, 12, 13],
                            [+0.001, +1.970, +1.970, +0.001, +1.980, +1.870, +0.001, +0.001, +0.001, 10, 11, 12, 13]
                        ]
                        const shuidiScaleArray = [
                            [+0.816, +0.735, +0.816, +0.816, +0.792, +0.816, +0.716, +0.701, +0.670, 10, 11, 12, 13],
                            [+0.816, +0.735, +0.816, +0.816, +0.792, +0.816, +0.716, +0.701, +0.670, 10, 11, 12, 13],
                            [+0.816, +0.735, +0.816, +0.816, +0.792, +0.816, +0.716, +0.701, +0.670, 10, 11, 12, 13]
                        ]
                        const textScaleArray = [
                            [+0.816, +0.735, +0.816, +0.816, +0.792, +0.816, +0.716, +0.701, +0.670, 10, 11, 12, 13],
                            [+0.816, +0.735, +0.816, +0.816, +0.792, +0.816, +0.716, +0.701, +0.670, 10, 11, 12, 13],
                            [+0.816, +0.735, +0.816, +0.816, +0.792, +0.816, +0.716, +0.701, +0.670, 10, 11, 12, 13]
                        ]
                        for (let a = 0; a < campusArray.length; a++) {

                            const shuidiPosition = new BABYLON.Vector3(shuidiPositionArray[0][a], shuidiPositionArray[1][a], shuidiPositionArray[2][a]);
                            const shuidiRotation = new BABYLON.Vector3(Math.PI * shuidiRotationArray[0][a], Math.PI * shuidiRotationArray[1][a], Math.PI * shuidiRotationArray[2][a]);
                            const shuidiScaling = new BABYLON.Vector3(shuidiScaleArray[0][a], shuidiScaleArray[1][a], shuidiScaleArray[2][a]);
                            const text_scaling = new BABYLON.Vector3(textScaleArray[0][a], textScaleArray[1][a], textScaleArray[2][a]);

                            //创建水滴
                            const shuidiClone = shuidi.clone('shuidi', null, false)!;
                            shuidiArray.push(shuidiClone);
                            shuidiArray[a].id = 'shuidi' + a;

                            //水滴位置、旋转、缩放效果应用
                            shuidiArray[a].rotation = new BABYLON.Vector3(0, 0, 0);
                            shuidiArray[a].position = shuidiPosition;
                            shuidiArray[a].scaling = shuidiScaling;

                            //水滴正面文字创建
                            const time_array = campusArray[a][1].replace(" ", ":").replace(/:/g, "·").split("·");//正则拆分时间
                            time_array[0].replace(/\b(0+)/gi, "");//正则去掉前面的0
                            const Writer = MeshWriter(scene, { scale: shuidiScaling });
                            const textMesh = new Writer(campusArray[a][0], {
                                "font-family": "PangMenZhengDao",
                                "letter-height": 0.2,
                                "letter-thickness": 0.05,
                                color: "#0be1fd",
                                anchor: "left",
                                colors: {
                                    diffuse: "#ff0000",
                                    specular: "#000000",
                                    ambient: "#444444",
                                    emissive: "#000000",
                                },
                                position: shuidiPosition.multiply(new BABYLON.Vector3(-1, 1, 1)),
                            });
                            const text_mesh = textMesh.getMesh();
                            text_mesh.name = 'text_mesh';
                            text_mesh.id = 'text_mesh' + a;

                            text_mesh.addRotation(Math.PI * 3 / 2, Math.PI * 2 / 2, Math.PI * 0 / 2);

                            shuidiArray[a].addRotation(shuidiRotation._x, shuidiRotation._y, shuidiRotation._z);
                            text_mesh.addRotation(0, 0, -shuidiRotation._y);//按旋转旋转
                            text_mesh.addRotation(-shuidiRotation._x, 0, 0);
                            text_mesh.addRotation(0, -shuidiRotation._z, 0);

                            //文字材质
                            const textMaterial = new BABYLON.StandardMaterial("textMaterial", scene);

                            textMaterial.diffuseColor = new BABYLON.Color3(1, 0, 1);
                            // textMaterial.specularColor = new BABYLON.Color3(0.5, 0.6, 0.87);
                            // textMaterial.emissiveColor = new BABYLON.Color3(1, 1, 1);
                            textMaterial.ambientColor = new BABYLON.Color3(0.23, 0.98, 0.53);

                            text_mesh.material = textMaterial;

                            //文字居中处理
                            const sizes = text_mesh.getHierarchyBoundingVectors();
                            const width = sizes.max.x - sizes.min.x;

                            // if (campusArray[a][0] === "阿多比") {
                            //     text_mesh.scaling = new BABYLON.Vector3(textScaleArray[0][a] * 0.7, textScaleArray[1][a], textScaleArray[2][a])
                            // } else {
                            //     text_mesh.scaling = text_scaling;
                            // }
                            text_mesh.scaling = text_scaling.multiply(new BABYLON.Vector3(1.4, 1.4, 1.4));

                            text_mesh.locallyTranslate(new BABYLON.Vector3(- width / 2, -0, 0));
                            text_mesh.locallyTranslate(new BABYLON.Vector3(0.5, 1, 0.3));
                            const text_mesh_temp_position = text_mesh.position;//用于灯光定位
                            text_mesh.locallyTranslate(new BABYLON.Vector3(-0.5, -0.93, -0.37));

                            // 测试阴影消失距离的柏林噪声
                            // let perlinNosie = new PerlinNoise();
                            // scene.registerBeforeRender(() => {
                            //     const a = new Date().getTime() - startTime;
                            //     const perlin = perlinNosie.noise(//perlin值只与当前循环操作的顶点的位置信息相关
                            //         (text_mesh.position.x * 0.3) + (a * 0.0002),
                            //         (text_mesh.position.y * 0.3) + (a * 0.0003),
                            //         (text_mesh.position.z * 0.3)
                            //     );
                            //     text_mesh.locallyTranslate(new BABYLON.Vector3(0, 0.001 * (perlin - 0.5), 0));
                            // });

                            //依据水滴法向量方向设置点光补足水滴正面亮度，以及产生文字阴影
                            const shuidi_light = new BABYLON.PointLight("shuidi_light", text_mesh_temp_position, scene);
                            shuidi_light.id = "shuidi_light" + a;
                            shuidi_light.includedOnlyMeshes = [shuidiArray[a], text_mesh];
                            // shuidi_light.diffuse = new BABYLON.Color3(0.8, 0.84, 0.9);
                            shuidi_light.intensity = 3;
                            shuidi_light.radius = 10;

                            // //局部坐标系显示
                            // const localAxes_shuidi = new BABYLON.AxesViewer(scene, 0.25);
                            // localAxes_shuidi.xAxis.parent = shuidiArray[a];
                            // localAxes_shuidi.yAxis.parent = shuidiArray[a];
                            // localAxes_shuidi.zAxis.parent = shuidiArray[a];

                            // const localAxes_text = new BABYLON.AxesViewer(scene, 0.25);
                            // localAxes_text.xAxis.parent = text_mesh;
                            // localAxes_text.yAxis.parent = text_mesh;
                            // localAxes_text.zAxis.parent = text_mesh;

                            // const localAxes_shuidi_light = new BABYLON.AxesViewer(scene, 0.25);
                            // localAxes_shuidi_light.xAxis.parent = shuidi_light;
                            // localAxes_shuidi_light.yAxis.parent = shuidi_light;
                            // localAxes_shuidi_light.zAxis.parent = shuidi_light;

                            //阴影发生器---------------------
                            const shuidi_generator = new BABYLON.ShadowGenerator(1024, shuidi_light);
                            shuidi_generator.usePoissonSampling = true;
                            shuidi_generator.bias = 0.000001;
                            shuidi_generator.blurScale = 1;
                            shuidi_generator.transparencyShadow = true;
                            shuidi_generator.darkness = 0.2;

                            shuidi_generator.addShadowCaster(text_mesh, true);
                        }

                        // 主光源
                        const mainLight = new BABYLON.DirectionalLight("mainLight", new BABYLON.Vector3(0, -10, 0), scene);
                        mainLight.includedOnlyMeshes = [scene.meshes[1], scene.meshes[2], scene.meshes[3], scene.meshes[4], scene.meshes[5]];
                        mainLight.intensity = 4;
                        mainLight.radius = 10;

                        // 正面光
                        const positiveLight = new BABYLON.DirectionalLight("positiveLight", new BABYLON.Vector3(0, 0, -10), scene);
                        positiveLight.includedOnlyMeshes = [scene.meshes[1], scene.meshes[2], scene.meshes[3], scene.meshes[4], scene.meshes[5]];
                        positiveLight.intensity = 2;
                        positiveLight.radius = 10;

                        // 公路色彩增强光

                        // 公路色相偏移
                        const highwayLight01 = new BABYLON.DirectionalLight("highwayLight01", new BABYLON.Vector3(0, -10, 0), scene);
                        highwayLight01.includedOnlyMeshes = [scene.meshes[3]];
                        highwayLight01.diffuse = new BABYLON.Color3(3, 0, 255);
                        highwayLight01.intensity = 1;
                        highwayLight01.radius = 10;

                        // 黄线饱和度提高
                        const highwayLight1 = new BABYLON.DirectionalLight("highwayLight1", new BABYLON.Vector3(0, -10, 0), scene);
                        highwayLight1.includedOnlyMeshes = [scene.meshes[4]];
                        highwayLight1.diffuse = new BABYLON.Color3(0, 255, 255);
                        highwayLight1.intensity = 0.01;
                        highwayLight1.radius = 10;

                        // 正面红色
                        const highwayLight2 = new BABYLON.PointLight("highwayLight2", new BABYLON.Vector3(0, 1, 15), scene);
                        highwayLight2.includedOnlyMeshes = [scene.meshes[3], scene.meshes[4], scene.meshes[5]];
                        highwayLight2.diffuse = new BABYLON.Color3(1, 0, 0);
                        highwayLight2.intensity = 100;

                        const highwayLight3 = new BABYLON.DirectionalLight("highwayLight3", new BABYLON.Vector3(0, 0, -10), scene);
                        highwayLight3.includedOnlyMeshes = [scene.meshes[3], scene.meshes[5]];
                        highwayLight3.diffuse = new BABYLON.Color3(0, 1, 0);
                        highwayLight3.intensity = 10;

                        // 水滴环境色补足
                        const shuidiLight = new BABYLON.HemisphericLight("shuidiLight", new BABYLON.Vector3(0, -10, 0), scene);
                        shuidiLight.includedOnlyMeshes = shuidiArray;
                        // shuidiLight.diffuse = new BABYLON.Color3(0.99, 0.7, 0.97);
                        shuidiLight.diffuse = new BABYLON.Color3(0.8, 0.7, 0.97);
                        shuidiLight.intensity = 2;


                        //阴影发生器---------------------
                        const generator = new BABYLON.ShadowGenerator(4096, mainLight);
                        generator.usePoissonSampling = true;
                        generator.bias = 0.00001;
                        generator.blurScale = 2;
                        generator.transparencyShadow = true;
                        generator.darkness = 0.5;

                        // for (let i = 0; i < scene.lights.length; i++) {
                        // 	console.log(i, scene.lights[i].name, scene.lights[i]);
                        // }

                        for (let i = 0; i < scene.meshes.length; i++) {

                            // console.log(i, scene.meshes[i].name, scene.meshes[i]);

                            // 给所有网格添加阴影发射器并接受阴影
                            generator.addShadowCaster(scene.meshes[i], true);
                            scene.meshes[i].receiveShadows = true;

                            if (scene.meshes[i].name === '公路' || scene.meshes[i].name === '黄线' || scene.meshes[i].name === '白线') {
                                scene.meshes[i].position.y += - 0.45;
                                scene.meshes[i].rotation = new BABYLON.Vector3(Math.PI * -1 / 512, Math.PI * 0 / 6, Math.PI * 0 / 6);
                            }

                            if (scene.meshes[i].name === '地面') {
                                scene.meshes[i].rotation = new BABYLON.Vector3(Math.PI * 1.25 / 256, Math.PI * 0 / 6, Math.PI * 0 / 6);
                                scene.meshes[i].position.y += - 0.2;
                                // scene.meshes[i].isVisible = false;
                            }

                        }
                    });

                return scene;
            };

            let scene = createScene(); //声明场景函数

            // 调用engine的runRenderLoop方案，执行scene.render()，让我们的3d场景渲染起来
            engine.runRenderLoop(function () {
                scene.render();
            });
        }

    };

    // function fileDownLoadFn() { //图片下载
    // 	下载后的文件名
    // 	const canvas = document.getElementById('BannerCanvas') as HTMLCanvasElement;
    // 	var fileContent = canvas.toDataURL("image/png");
    // 	var save_link = document.createElementNS('http://www.w3.org/1999/xhtml', 'a');
    // 	var filename = ['woniuxy.cn.pc', 'woniuxy.cn.mo', 'woniuxy.com.pc'];
    // 	var cWidthTemp = [1920, 660, 1110];
    // 	var cHeightTemp = [650, 330, 450];
    // 	var event = document.createEvent('MouseEvents');
    // 	setTimeout(() => {
    // 	    for (var i = 0; i < cWidthTemp.length; i++) {
    // 	        save_link.href = fileContent;
    // 	        save_link.download = filename[e] + '.png';
    // 	        event = document.createEvent('MouseEvents');
    // 	        event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    // 	        save_link.dispatchEvent(event);
    // 	    }
    // 	}, 0)
    // }

    return (
        <div id='BannerBox'>
            <div id="top_nav">
                <img src="img/banner/top_nav.svg" />
            </div>
            <div id="banner_area">
                <img id='contrast' src="/img/banner/contrast.png" />
                <canvas id='BannerCanvas'>
                    Your browser does not support the canvas element.
                </canvas>
            </div>
            <div className="loading_progress">LoadingProgress: <span id="LoadingProgress"></span></div>
        </div>
    );
}

interface menuProps { onClick: MouseEventHandler; content: string; };
export function Menu(props: menuProps) {
    return (
        <div className="GS_btn" onClick={props.onClick}>
            {props.content}
        </div>
    );
}

export function VersionInfo() {
    const [time, settime] = useState(0);

    useEffect(() => {
        // 记录运行时长
        const playTime = setInterval((): void => {
            settime((prevCount) => {
                return prevCount + 1;
            });
        }, 1000);

        return function clear() {
            clearInterval(playTime);
        };
    }, []);

    if (path === "browser") {
        return (
            <div id="version_info" className="info">
                已运行&nbsp;:&nbsp;&nbsp;{time}s
                <br />
            </div>
        );
    } else {
        return (
            <div id="version_info" className="info">
                Node.js: <span id="node-version"></span>
                <br />
                Chromium: <span id="chrome-version"></span>
                <br />
                Electron: <span id="electron-version"></span>
                <br />
                已运行&nbsp;:&nbsp;&nbsp;{time}s
                <br />
            </div>
        );
    }

}

export function LoadingAnimation() {
    return (
        <div id="loadingPage">
            <div id="loadingBox">
                <div className="shadow">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                </div>
                <div id='maskElement2'></div>
                <div id='maskElement3'></div>
                <div className="line">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                </div>
            </div>
        </div>
    );
}