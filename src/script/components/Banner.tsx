import { useEffect } from 'react';
import * as BABYLON from 'babylonjs';
import 'babylonjs-loaders';
import { MeshWriter } from "meshwriter";
import { PerlinNoise } from "./perlin";

const imgSize = [[1920, 650], [660, 330], [1110, 450]];
const imgName = ['woniuxy.cn.pc', 'woniuxy.cn.mo', 'woniuxy.com.pc'];
const campus_array = [
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
for (let i = 0; i < campus_array.length - 1; i++) {
	for (let j = 0; j < campus_array.length - 1 - i; j++) {
		if (campus_array[j][1] > campus_array[j + 1][1]) {
			let temp_array = campus_array[j];
			campus_array[j] = campus_array[j + 1];
			campus_array[j + 1] = temp_array;
		}
	}
}

function BannerBox() {

	function isCanvas(obj: HTMLCanvasElement | HTMLElement): obj is HTMLCanvasElement {
		return obj.tagName === 'CANVAS';
	}

	useEffect(() => {
		const canvas = document.getElementById('BannerCanvas')!;

		function canvasResize() {
			if (isCanvas(canvas)) {
				canvas.width = 1920;
				canvas.height = 650;
			}
		}

		// 初始化canvas标签大小
		canvasResize();

		function playOrHidden(event: CustomEvent) {
			if (event.detail === 'Play') {
				window.removeEventListener("playOrHidden", playOrHidden as EventListener)
			}
			//绘制canvas内容
			createBabylonScene();
		}

		window.addEventListener("playOrHidden", playOrHidden as EventListener)
	}, []);

	function createBabylonScene() {
		const canvas = document.getElementById("BannerCanvas")!; // 得到canvas对象的引用
		const start_time = new Date().getTime();
		let perlinNosie = new PerlinNoise();

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
			function customLoadingScreen():ILoadingScreen  {
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
								if (loadedTime - start_time > 2000) {
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

						// const shuidi_index = 103;//水滴的正面面序号
						// const text_index = 103;//文字的正面面序号
						// const is_line_display = true;//水滴正面法线是否渲染
						const shuidi_array = [];
						const shuidi_position_array = [
							[-0.750, -0.360, -0.080, +0.400, +0.770, +1.300, +1.860, +2.370, +2.870, 10, 11, 12, 13],
							[+0.700, +0.730, +1.020, +1.150, +1.250, +1.270, +1.400, +1.440, +1.600, 10, 11, 12, 13],
							[+11.60, +11.40, +9.000, +7.300, +6.800, +5.600, +4.000, +3.000, +2.000, 10, 11, 12, 13],
						];
						const shuidi_rotation_array = [
							[+1.950, +1.900, +0.001, +1.980, +0.001, +1.900, +1.980, +0.001, +0.001, 10, 11, 12, 13],
							[+0.150, +1.900, +1.900, +1.680, +0.100, +1.800, +0.001, +0.110, +1.800, 10, 11, 12, 13],
							[+0.001, +1.970, +1.970, +0.001, +1.980, +1.870, +0.001, +0.001, +0.001, 10, 11, 12, 13]
						]
						const shuidi_scale_array = [
							[+0.816, +0.735, +0.816, +0.816, +0.792, +0.816, +0.716, +0.701, +0.670, 10, 11, 12, 13],
							[+0.816, +0.735, +0.816, +0.816, +0.792, +0.816, +0.716, +0.701, +0.670, 10, 11, 12, 13],
							[+0.816, +0.735, +0.816, +0.816, +0.792, +0.816, +0.716, +0.701, +0.670, 10, 11, 12, 13]
						]
						for (let a = 0; a < campus_array.length; a++) {

							const shuidi_position = new BABYLON.Vector3(shuidi_position_array[0][a], shuidi_position_array[1][a], shuidi_position_array[2][a]);
							const shuidi_rotation = new BABYLON.Vector3(Math.PI * shuidi_rotation_array[0][a], Math.PI * shuidi_rotation_array[1][a], Math.PI * shuidi_rotation_array[2][a]);
							const shuidi_scaling = new BABYLON.Vector3(shuidi_scale_array[0][a], shuidi_scale_array[1][a], shuidi_scale_array[2][a]);

							//创建水滴
							const shuidi_clone = shuidi.clone('shuidi', null, false)!;
							shuidi_array.push(shuidi_clone);
							shuidi_array[a].id = 'shuidi' + a;

							//水滴位置、旋转、缩放效果应用
							shuidi_array[a].rotationQuaternion = null;//旋转四元数初始化
							shuidi_array[a].rotation = new BABYLON.Vector3(0, 0, 0);
							shuidi_array[a].position = shuidi_position;
							shuidi_array[a].scaling = shuidi_scaling;

							//水滴正面文字创建
							const time_array = campus_array[a][1].replace(" ", ":").replace(/:/g, "·").split("·");//正则拆分时间
							time_array[0].replace(/\b(0+)/gi, "");//正则去掉前面的0
							const Writer = MeshWriter(scene, { scale: shuidi_scaling });
							const textMesh = new Writer(time_array[1], {
								"font-family": "PangMenZhengDao",
								"letter-height": 0.2,
								"letter-thickness": 0.05,
								color: "#fd500b",
								anchor: "left",
								colors: {
									diffuse: "#fd500b",
									specular: "#000000",
									ambient: "#fd500b",
									emissive: "#fd500b",
								},
								position: shuidi_position.multiply(new BABYLON.Vector3(-1, 1, 1)),
							});
							const text_mesh = textMesh.getMesh();
							text_mesh.name = 'text_mesh';
							text_mesh.id = 'text_mesh' + a;
							console.log(text_mesh.material)

							text_mesh.addRotation(Math.PI * 3 / 2, Math.PI * 2 / 2, Math.PI * 0 / 2);

							shuidi_array[a].addRotation(shuidi_rotation._x, shuidi_rotation._y, shuidi_rotation._z);
							text_mesh.addRotation(0, 0, -shuidi_rotation._y);
							text_mesh.addRotation(-shuidi_rotation._x, 0, 0);
							text_mesh.addRotation(0, -shuidi_rotation._z, 0);

							//文字居中处理
							const sizes = text_mesh.getHierarchyBoundingVectors();
							const width = sizes.max.x - sizes.min.x;
							text_mesh.locallyTranslate(new BABYLON.Vector3(- width / 2, -0, 0));
							text_mesh.locallyTranslate(new BABYLON.Vector3(0.5, 1, 0.3));
							const text_mesh_temp_position = text_mesh.position;//用于灯光定位
							text_mesh.locallyTranslate(new BABYLON.Vector3(-0.5, -0.93, -0.37));

							// 测试阴影消失距离的柏林噪声
							// setInterval(() => {
							// 	const a = new Date().getTime() - start_time;
							// 	const perlin = perlinNosie.noise(//perlin值只与当前循环操作的顶点的位置信息相关
							// 		(text_mesh.position.x * 0.3) + (a * 0.0002),
							// 		(text_mesh.position.y * 0.3) + (a * 0.0003),
							// 		(text_mesh.position.z * 0.3)
							// 	);
							// 	text_mesh.locallyTranslate(new BABYLON.Vector3(0, 0.001 * (perlin - 0.5), 0));
							// }, 25)

							//水滴正面法向量示意线条创建
							// shuidi_array[a].updateFacetData();
							// const shuidi_mesh_positions = shuidi_array[a].getFacetLocalPositions();
							// const shuidi_mesh_normals = shuidi_array[a].getFacetLocalNormals();
							// const shuidi_mesh_points = [shuidi_mesh_positions[shuidi_index], shuidi_mesh_positions[shuidi_index].add(shuidi_mesh_normals[shuidi_index])];
							// const shuidi_mesh_lines = [];
							// shuidi_mesh_lines.push(shuidi_mesh_points);

							// const shuidi_mesh_lineSystem = BABYLON.MeshBuilder.CreateLineSystem("shuidi_mesh_line", { lines: shuidi_mesh_lines }, scene);
							// shuidi_mesh_lineSystem.id = "shuidi_mesh_line" + a;
							// shuidi_mesh_lineSystem.color = BABYLON.Color3.Green();
							// shuidi_mesh_lineSystem.isVisible = is_line_display;

							// shuidi_mesh_lineSystem.position = shuidi_position.multiply(new BABYLON.Vector3(-1, 1, 1));
							// shuidi_mesh_lineSystem.rotation = shuidi_array[a].rotation.multiply(new BABYLON.Vector3(1, -1, -1));
							// shuidi_mesh_lineSystem.scaling = shuidi_scaling;

							//依据水滴法向量方向设置点光补足水滴正面亮度，以及产生文字阴影
							const shuidi_light = new BABYLON.PointLight("shuidi_light", text_mesh_temp_position, scene);
							shuidi_light.id = "shuidi_light" + a;
							shuidi_light.includedOnlyMeshes = [shuidi_array[a], text_mesh];
							shuidi_light.diffuse = new BABYLON.Color3(0.8, 0.84, 0.9);
							shuidi_light.intensity = 3;
							shuidi_light.radius = 10;

							// //局部坐标系显示
							// const localAxes_shuidi = new BABYLON.AxesViewer(scene, 0.25);
							// localAxes_shuidi.xAxis.parent = shuidi_array[a];
							// localAxes_shuidi.yAxis.parent = shuidi_array[a];
							// localAxes_shuidi.zAxis.parent = shuidi_array[a];

							// const localAxes_text = new BABYLON.AxesViewer(scene, 0.25);
							// localAxes_text.xAxis.parent = text_mesh;
							// localAxes_text.yAxis.parent = text_mesh;
							// localAxes_text.zAxis.parent = text_mesh;

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
						// mainLight.falloffType = BABYLON.Light.FALLOFF_PHYSICAL;

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
						highwayLight2.diffuse = new BABYLON.Color3(255, 0, 0);
						highwayLight2.intensity = 0.4;

						const highwayLight3 = new BABYLON.DirectionalLight("highwayLight3", new BABYLON.Vector3(0, 0, -10), scene);
						highwayLight3.includedOnlyMeshes = [scene.meshes[3], scene.meshes[5]];
						highwayLight3.diffuse = new BABYLON.Color3(0, 255, 0);
						highwayLight3.intensity = 10;
						// highwayLight3.radius = 10;

						// 水滴环境色补足
						const shuidiLight = new BABYLON.HemisphericLight("shuidiLight", new BABYLON.Vector3(0, -10, 0), scene);
						shuidiLight.includedOnlyMeshes = shuidi_array;
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

export default BannerBox;
