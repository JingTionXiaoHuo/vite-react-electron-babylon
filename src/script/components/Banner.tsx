import { useEffect } from 'react';
import * as BABYLON from 'babylonjs';
import 'babylonjs-loaders';
import { MeshWriter } from "meshwriter";

const imgSize = [[1920, 650], [660, 330], [1110, 450]];
const imgName = ['woniuxy.cn.pc', 'woniuxy.cn.mo', 'woniuxy.com.pc'];
const campus_array = [
	['成都', '9-22'],
	['天府', '10-10'],
	['重庆', '9-19'],
	['西安', '9-19'],
	['上海', '9-26'],
	['武汉', '9-21'],
	['深圳', '10-10'],
	['南京', '10-24'],
	['杭州', '10-18'],
	['阿多比', '9-26'],
	['凡云', '9-28']
];

// 按时间顺序对校区数组重排
for (let i = 0; i < campus_array.length - 1; i++) {
	for (let j = 0; j < campus_array.length - 1 - i; j++) {
		if (campus_array[j][1] < campus_array[j + 1][1]) {
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
		//绘制canvas内容
		createBabylonScene();

		function playOrHidden(event: CustomEvent) {
			if (event.detail === 'Play') {
				window.removeEventListener("playOrHidden", playOrHidden as EventListener)
			}
		}

		window.addEventListener("playOrHidden", playOrHidden as EventListener)
	}, []);

	function createBabylonScene() {
		const canvas = document.getElementById("BannerCanvas")!; // 得到canvas对象的引用
		const start_time = new Date().getTime();

		if (isCanvas(canvas)) {
			const engine = new BABYLON.Engine(canvas, true); // 初始化 BABYLON 3D engine

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
							}
						}
						shuidi.rotationQuaternion = null;//旋转四元数初始化
						shuidi.rotation = new BABYLON.Vector3(0, 0, 0);
						shuidi.scaling = new BABYLON.Vector3(1, 1, 1);

						const shuidi_index = 103;//水滴的正面面序号
						const text_index = 103;//文字的正面面序号
						const is_line_display = false;//水滴正面法线是否渲染
						const shuidi_array = [shuidi];
						const shuidi_position_array = [
							[-0.750, -0.360, -0.080, +0.400, +0.770, +1.300, +1.860, +2.370, +2.870, 10, 11, 12, 13],
							[+0.700, +0.730, +1.020, +1.150, +1.250, +1.270, +1.400, +1.440, +1.600, 10, 11, 12, 13],
							[+11.60, +11.40, +9.000, +7.300, +6.800, +5.600, +4.000, +3.000, +2.000, 10, 11, 12, 13],
						];
						const shuidi_rotation_array = [
							[+1.950, +1.900, +0.001, +1.980, +0.001, +1.900, +1.980, +0.001, +0.001, 10, 11, 12, 13],
							[+0.150, +1.900, +1.900, +1.680, +0.100, +1.800, +0.001, +1.100, +1.800, 10, 11, 12, 13],
							[+0.001, +1.970, +1.970, +0.001, +1.980, +1.870, +0.001, +0.001, +0.001, 10, 11, 12, 13]
						]
						const shuidi_scale_array = [
							+0.816, +0.735, +0.816, +0.816, +0.792, +0.816, +0.716, +0.701, +0.670, 10, 11, 12, 13
						]
						for (let a = 0; a < campus_array.length; a++) {

							const shuidi_position = new BABYLON.Vector3(shuidi_position_array[0][a], shuidi_position_array[1][a], shuidi_position_array[2][a]);
							const shuidi_rotation = new BABYLON.Vector3(Math.PI * shuidi_rotation_array[0][a], Math.PI * shuidi_rotation_array[1][a], Math.PI * shuidi_rotation_array[2][a]);
							const shuidi_scaling = new BABYLON.Vector3(shuidi_scale_array[a], shuidi_scale_array[a], shuidi_scale_array[a]);

							//创建水滴
							if (a === 0) {
								shuidi.name = 'shuidi' + a;
							} else {
								const shuidi_clone = shuidi.clone('shuidi' + a, null, false)!;
								shuidi_array.push(shuidi_clone!);
							}

							//水滴位置、旋转、缩放效果应用
							shuidi_array[a].position = shuidi_position;
							shuidi_array[a].scaling = new BABYLON.Vector3(1, 1, 1);
							const localAxes_shuidi = new BABYLON.AxesViewer(scene, 0.25);
							localAxes_shuidi.xAxis.parent = shuidi_array[a];
							localAxes_shuidi.yAxis.parent = shuidi_array[a];
							localAxes_shuidi.zAxis.parent = shuidi_array[a];
							// shuidi_array[a].scaling = shuidi_scaling;

							//水滴正面文字创建
							const Writer = MeshWriter(scene, { scale: shuidi_scaling });
							const textMesh = new Writer(campus_array[a][1], {
								"font-family": "PangMenZhengDao",
								"letter-height": 0.2,
								"letter-thickness": 0.05,
								color: "#1C3870",
								anchor: "left",
								colors: {
									diffuse: "#fd500b",
									specular: "#000000",
									ambient: "#01f8cf",
									emissive: "#ff2600",
								},
								position: shuidi_position.multiply(new BABYLON.Vector3(-1, 1, 1)),
								// position: shuidi_position.multiply(new BABYLON.Vector3(-1, 1, 1).add(new BABYLON.Vector3(0, 0, 0.01))),
							});
							const text_mesh = textMesh.getMesh();
							const localAxes_text = new BABYLON.AxesViewer(scene, 0.25);
							localAxes_text.xAxis.parent = text_mesh;
							localAxes_text.yAxis.parent = text_mesh;
							localAxes_text.zAxis.parent = text_mesh;

							//水滴正面法向量示意线条创建
							shuidi_array[a].updateFacetData();
							const shuidi_mesh_positions = shuidi_array[a].getFacetLocalPositions();
							const shuidi_mesh_normals = shuidi_array[a].getFacetLocalNormals();
							const shuidi_mesh_points = [shuidi_mesh_positions[shuidi_index], shuidi_mesh_positions[shuidi_index].add(shuidi_mesh_normals[shuidi_index])];
							const shuidi_mesh_lines = [];
							shuidi_mesh_lines.push(shuidi_mesh_points);

							const shuidi_mesh_lineSystem = BABYLON.MeshBuilder.CreateLineSystem("shuidi_mesh_line", { lines: shuidi_mesh_lines }, scene);
							shuidi_mesh_lineSystem.id = "shuidi_mesh_line" + a;
							shuidi_mesh_lineSystem.color = BABYLON.Color3.Green();
							shuidi_mesh_lineSystem.isVisible = is_line_display;

							// 文字正面法向量示意线条创建
							text_mesh.updateFacetData();
							const text_mesh_positions = text_mesh.getFacetLocalPositions();
							const text_mesh_normals = text_mesh.getFacetLocalNormals();
							const text_mesh_points = [text_mesh_positions[text_index], text_mesh_positions[text_index].add(text_mesh_normals[text_index])];
							const text_mesh_lines = [];
							text_mesh_lines.push(text_mesh_points);

							const text_mesh_lineSystem = BABYLON.MeshBuilder.CreateLineSystem("text_mesh_line", { lines: text_mesh_lines }, scene);
							text_mesh_lineSystem.id = "text_mesh_line" + a;
							text_mesh_lineSystem.color = BABYLON.Color3.Blue();
							text_mesh_lineSystem.isVisible = is_line_display;

							//依据水滴法向量方向设置平行光补足水滴正面亮度，以及产生文字阴影
							const shuidi_light = new BABYLON.DirectionalLight("shuidi_light", new BABYLON.Vector3(0, -1, 0), scene);
							shuidi_light.id = "shuidi_light" + a;
							shuidi_light.includedOnlyMeshes = [shuidi_array[a], text_mesh];
							shuidi_light.intensity = 4;
							shuidi_light.radius = 10;

							//阴影发生器---------------------
							if (a == 0) {
								const generator = new BABYLON.ShadowGenerator(4096, shuidi_light);
								generator.usePoissonSampling = true;
								generator.bias = 0.00001;
								generator.blurScale = 2;
								generator.transparencyShadow = true;
								generator.darkness = 0;
								// 给水滴网格添加阴影发射器并接受阴影
								generator.addShadowCaster(text_mesh, true);
							}

							shuidi_mesh_lineSystem.position = shuidi_position.multiply(new BABYLON.Vector3(-1, 1, 1));
							shuidi_mesh_lineSystem.rotation = shuidi_array[a].rotation.multiply(new BABYLON.Vector3(1, -1, -1));
							shuidi_mesh_lineSystem.scaling = shuidi_scaling;

							text_mesh_lineSystem.position = text_mesh.position;
							text_mesh_lineSystem.rotation = text_mesh.rotation.multiply(new BABYLON.Vector3(1, -1, -1));
							text_mesh_lineSystem.scaling = text_mesh.scaling;

							text_mesh.addRotation(Math.PI * 3 / 2, Math.PI * 2 / 2, Math.PI * 0 / 2);

							// shuidi_array[a].addRotation(shuidi_rotation._x, shuidi_rotation._y, shuidi_rotation._z);
							// shuidi_mesh_lineSystem.addRotation(shuidi_rotation._x, -shuidi_rotation._y, -shuidi_rotation._z);
							// text_mesh.addRotation(-shuidi_rotation._x, -shuidi_rotation._z, -shuidi_rotation._y);
							// text_mesh_lineSystem.addRotation(-shuidi_rotation._x, -shuidi_rotation._z, -shuidi_rotation._y);

							const test_vector3 = {
								_x:Math.PI * 1 / 72,
								_y:Math.PI * 2 / 72,
								_z:Math.PI * 3 / 72
							}
							setInterval(() => {
								shuidi_array[a].addRotation(test_vector3['_x'],test_vector3['_y'],test_vector3['_z']);
								// shuidi_mesh_lineSystem.addRotation(test_vector3['_x'],-test_vector3['_y'],-test_vector3['_z']);
								text_mesh.addRotation(-test_vector3['_x'],-test_vector3['_z'],-test_vector3['_y']);
								// text_mesh_lineSystem.addRotation(-test_vector3['_x'],-test_vector3['_z'],-test_vector3['_y']);
							},1200);
						}

						// 主光源
						const mainLight = new BABYLON.DirectionalLight("mainLight", new BABYLON.Vector3(0, -10, 0), scene);
						mainLight.includedOnlyMeshes = [scene.meshes[1], scene.meshes[2], scene.meshes[3], scene.meshes[4], scene.meshes[5]];
						mainLight.intensity = 4;
						mainLight.radius = 10;
						// mainLight.falloffType = BABYLON.Light.FALLOFF_PHYSICAL;

						// 正面光
						const positiveLight = new BABYLON.DirectionalLight("positiveLight", new BABYLON.Vector3(0, 0, -10), scene);
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

						//阴影发生器---------------------
						const generator = new BABYLON.ShadowGenerator(4096, mainLight);
						generator.usePoissonSampling = true;
						generator.bias = 0.00001;
						generator.blurScale = 2;
						generator.transparencyShadow = true;
						generator.darkness = 0.5;

						for (var i = 0; i < scene.meshes.length; i++) {

							console.log(i, scene.meshes[i].name, scene.meshes[i]);

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
