import { useEffect } from 'react';
import * as BABYLON from 'babylonjs';
import { FloatArray } from 'babylonjs';
import { PerlinNoise } from "./perlin";
// import start_addr from "/img/babylonImg/jianbian.jpg"

function BabylonBox() {
	function isCanvas(obj: HTMLCanvasElement | HTMLElement): obj is HTMLCanvasElement {
		return obj.tagName === 'CANVAS';
	}

	useEffect(() => {
		const canvas = document.getElementById('renderCanvas')!;

		function canvasResize(): void {
			if (isCanvas(canvas)) {
				canvas.width = 0.8 * document.body.clientWidth;
				canvas.height = 0.8 * document.body.clientHeight;
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
		const canvas = document.getElementById("renderCanvas")!; // 得到canvas对象的引用
		const start_time = new Date().getTime();

		if (isCanvas(canvas)) {
			const engine = new BABYLON.Engine(canvas, true); // 初始化 BABYLON 3D engine

			/******* 定义场景函数 ******/
			let createScene = function () {

				let perlinNosie = new PerlinNoise();
				let scene = new BABYLON.Scene(engine);
				scene.clearColor = new BABYLON.Color4(0, 0, 0, 0);
				// scene.clearColor = new BABYLON.Color4(0.19607843, 0.80392157, 0.63921569, 1);

				// 摄像机
				let camera = new BABYLON.ArcRotateCamera("Camera", -Math.PI / 4, Math.PI / 2.5, 10, BABYLON.Vector3.Zero(), scene);
				camera.attachControl(canvas, true);
				camera.minZ = 0.1;

				//环境
				const defaultEnvironment = scene.createDefaultEnvironment({
					createSkybox: false,
					groundShadowLevel: 0.2,
					createGround: false,
				});

				if (defaultEnvironment && defaultEnvironment.ground) {
					defaultEnvironment.ground.receiveShadows = true;
					defaultEnvironment.ground.position.y = -4;
					defaultEnvironment.setMainColor(new BABYLON.Color3(3, 3, 3));
				}

				// 灯光
				const light1 = new BABYLON.DirectionalLight("light1", new BABYLON.Vector3(0, 1, 0), scene);
				const light2 = new BABYLON.DirectionalLight("light2", new BABYLON.Vector3(0, -1, 0), scene);
				light2.position = new BABYLON.Vector3(0, 1, 0)

				// 二十面体---------------------
				const icosahedron = BABYLON.MeshBuilder.CreateGeodesic("icosahedron1", { m: 2, n: 1, size: 2, updatable: true });

				var normalMaterial = new BABYLON.StandardMaterial("normalMat", scene);
				icosahedron.material = normalMaterial;

				// //阴影---------------------
				const generator = new BABYLON.ShadowGenerator(512, light1);
				generator.useBlurExponentialShadowMap = true;
				generator.blurKernel = 32;

				let positions = icosahedron.getVerticesData(BABYLON.VertexBuffer.PositionKind);//顶点位置引用

				let initial_position: FloatArray = [];//复制一份初始状态顶点位置数组
				if (positions) {
					for (let i = 0; i < positions.length; i++) {
						initial_position.push(positions[i])
					}
				}

				scene.registerBeforeRender(function () {

					const a = new Date().getTime() - start_time;

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
							const ratio = perlin;// 为了控制顶点缩放比例对噪声值做的进一步处理:number
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
					generator.addShadowCaster(scene.meshes[i]);
					// scene.meshes[i].receiveShadows = true;
				}

				return scene;
			};

			let scene = createScene(); //声明场景函数

			// 调用engine的runRenderLoop方案，执行scene.render()，让我们的3d场景渲染起来
			engine.runRenderLoop(function () {
				scene.render();
			});

			if (document.getElementById('FPS')) {
				let fps = document.getElementById('FPS');
				if (fps !== null) {
					fps.innerHTML = engine.getFps().toFixed() + " fps";
				}
			}
		}

	};

	return (
		<div id='BabylonBox'>
			<canvas id='renderCanvas'>
				Your browser does not support the canvas element.
			</canvas>
			<div className="pfs-info">FPS: <span id="FPS"></span></div>
		</div>

	);
}

export default BabylonBox;
