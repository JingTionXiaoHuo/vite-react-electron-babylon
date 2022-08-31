import { useEffect } from 'react';
import * as BABYLON from 'babylonjs';
import 'babylonjs-loaders';

// const imgSize = [[1920, 650], [660, 330], [1110, 450]];
// const imgName = ['woniuxy.cn.pc', 'woniuxy.cn.mo', 'woniuxy.com.pc'];

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
				let camera = new BABYLON.ArcRotateCamera("Camera", Math.PI / 2, Math.PI / 1.973, 12.7, new BABYLON.Vector3(0, 0.63, 3), scene);
				camera.attachControl(canvas, true);
				camera.minZ = 0.1;
				camera.fov = 0.26;

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

						// 主光源
						const mainLight = new BABYLON.DirectionalLight("mainLight", new BABYLON.Vector3(0, -1, 0), scene);
						mainLight.position = new BABYLON.Vector3(0, 10, 0);
						mainLight.direction = new BABYLON.Vector3(0, -10, 0);
						mainLight.intensity = 4;
						mainLight.radius = 10;
						// mainLight.excludedMeshes = [scene.meshes[1]];

						// 正面光
						const positiveLight = new BABYLON.DirectionalLight("positiveLight", new BABYLON.Vector3(0, 0, 0), scene);
						positiveLight.position = new BABYLON.Vector3(0, 0, -1)
						positiveLight.direction = new BABYLON.Vector3(0, 0, -10);
						positiveLight.intensity = 2;
						positiveLight.radius = 10;

						// 公路色彩增强光
						const highwayLight1 = new BABYLON.DirectionalLight("highwayLight1", new BABYLON.Vector3(0, -1, 0), scene);
						highwayLight1.diffuse = new BABYLON.Color3(3, 0, 255);
						highwayLight1.position = new BABYLON.Vector3(0, 10, 0);
						highwayLight1.direction = new BABYLON.Vector3(0, -10, 0);
						highwayLight1.intensity = 0.1;
						highwayLight1.radius = 10;
						highwayLight1.includedOnlyMeshes = [scene.meshes[3],scene.meshes[5]];

						const highwayLight2 = new BABYLON.DirectionalLight("highwayLight2", new BABYLON.Vector3(0, -1, 0), scene);
						highwayLight2.diffuse = new BABYLON.Color3(255, 240, 250);
						highwayLight2.position = new BABYLON.Vector3(0, 0, -1)
						highwayLight2.direction = new BABYLON.Vector3(0, 0, -10);
						highwayLight2.intensity = 0.02;
						highwayLight2.radius = 10;
						highwayLight2.includedOnlyMeshes = [scene.meshes[3]];

						//阴影发生器---------------------
						const generator = new BABYLON.ShadowGenerator(4096, mainLight);
						generator.usePoissonSampling = true;
						generator.bias = 0.00001;
						generator.blurScale = 1;
						generator.transparencyShadow = true;
						generator.darkness = 0.5;

						for (var i = 0; i < scene.meshes.length; i++) {

							console.log(i, scene.meshes[i].name, scene.meshes[i]);
							// console.log(scene.meshes[i].material);

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
