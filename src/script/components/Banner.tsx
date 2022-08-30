import { useEffect } from 'react';
import * as BABYLON from 'babylonjs';

function BannerBox() {

	function isCanvas(obj: HTMLCanvasElement | HTMLElement): obj is HTMLCanvasElement {
		return obj.tagName === 'CANVAS';
	}

	useEffect(() => {
		const canvas = document.getElementById('BannerCanvas')!;

		function canvasResize() {
			if (isCanvas(canvas)) {
				canvas.width = canvas.parentElement!.clientWidth;
				canvas.height = canvas.parentElement!.clientHeight;
			}
		}
		window.addEventListener("resize", canvasResize);

		// 初始化canvas标签大小
		canvasResize();

		function playOrHidden(event: CustomEvent) {
			if (event.detail === 'Play') {
				//绘制canvas内容
				createBabylonScene();
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
				let camera = new BABYLON.ArcRotateCamera("Camera", -Math.PI / 4, Math.PI / 2.5, 10, BABYLON.Vector3.Zero(), scene);
				camera.attachControl(canvas, true);
				camera.minZ = 0.1;

				BABYLON.SceneLoader.AppendAsync("/model/", "banner.glb", scene,
					function (event) {
						// 加载进度计算
						const percentage = event.lengthComputable ? " " + Math.floor(event.loaded / event.total * 100) + "%" : "";
						document.getElementById("LoadingProgress")!.innerHTML = percentage;
						if (Math.floor(event.loaded / event.total * 100) === 100) {
							var bodyStateClock = setInterval(() => {
								var loadingProgress = 0;
								var loadedTime = new Date().getTime();
								if (loadedTime - start_time > 2000) {
									document.body.classList.contains("loading") && document.body.classList.replace("loading", "completed");
									loadingProgress = 100;
									clearTimeout(bodyStateClock);
								}
							}, 100);
						}
					}).then(() => {
						
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

	return (
		<div id='BannerBox'>
			<canvas id='BannerCanvas'>
				Your browser does not support the canvas element.
			</canvas>
			<div className="pfs-info">LoadingProgress: <span id="LoadingProgress"></span></div>
		</div>
	);
}

export default BannerBox;
