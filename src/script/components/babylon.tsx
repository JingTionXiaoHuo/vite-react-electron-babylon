import { useEffect } from 'react';
import * as BABYLON from 'babylonjs';
import { FloatArray } from 'babylonjs';
import { PerlinNoise } from "./perlin";
import 'https://cdn.babylonjs.com/cannon.js';
// import start_addr from "/img/babylonImg/jianbian.jpg"

function BabylonBox() {
	function isCanvas(obj: HTMLCanvasElement | HTMLElement | null): obj is HTMLCanvasElement {
		if (obj !== null) {
			return obj.tagName === 'CANVAS';
		} else {
			return false
		}
	}

	useEffect(() => {
		const canvas = document.getElementById('babylonCanvas');

		if (isCanvas(canvas)) {
			canvas.width = canvas.parentElement!.clientWidth;
			canvas.height = canvas.parentElement!.clientHeight;

			window.addEventListener("resize", () => {
				canvas.width = canvas.parentElement!.clientWidth;
				canvas.height = canvas.parentElement!.clientHeight;
			});

			createBabylonScene();
		} else {
			console.log("cannot find canvas~")
		}
	}, []);


	function createBabylonScene() {
		const canvas = document.getElementById("babylonCanvas")!; // 得到canvas对象的引用
		const start_time = new Date().getTime();//记录场景开始时间

		if (isCanvas(canvas)) {
			const engine = new BABYLON.Engine(canvas, true); // 初始化 BABYLON 3D engine

			/******* 定义场景函数 ******/
			let createScene = function () {

				let perlinNosie = new PerlinNoise();
				let scene = new BABYLON.Scene(engine);
				scene.clearColor = new BABYLON.Color4(0, 0, 0, 0);
				scene.enablePhysics();

				class Ball extends BABYLON.Mesh {
					// constructor(name: string, scene?: BABYLON.Nullable<BABYLON.Scene> | undefined, parent?: BABYLON.Nullable<BABYLON.Node> | undefined, source?: BABYLON.Nullable<BABYLON.Mesh> | undefined, doNotCloneChildren?: boolean | undefined, clonePhysicsImpostor?: boolean | undefined) {
					// 	super(name, scene, parent, source, doNotCloneChildren, clonePhysicsImpostor);
					// }
					static smell_outline:BABYLON.Mesh = BABYLON.MeshBuilder.CreateGeodesic(this.name + 'smell_outline', { m: 24, n: 2, size: 2, updatable: true });
				}

				// 摄像机
				let camera = new BABYLON.ArcRotateCamera("Camera", -Math.PI / 4, Math.PI / 2.5, 10, BABYLON.Vector3.Zero(), scene);
				camera.attachControl(canvas, true);
				camera.minZ = 0.1;

				// 灯光
				const light1 = new BABYLON.PointLight("light1", new BABYLON.Vector3(0, 10, 0), scene);

				// physics scene
				var ground = BABYLON.MeshBuilder.CreateSphere("Ground", { segments: 100, diameterX: 1 }, scene);
				ground.scaling = new BABYLON.Vector3(10, 1, 10);
				ground.position.y = -2.0;
				ground.physicsImpostor = new BABYLON.PhysicsImpostor(ground, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 0, friction: 0.5, restitution: 0.7 }, scene);

				// 二十面体---------------------
				const icosahedron = BABYLON.MeshBuilder.CreateGeodesic("icosahedron1", { m: 24, n: 2, size: 2, updatable: true });

				// //阴影---------------------
				const generator = new BABYLON.ShadowGenerator(1024, light1);
				generator.usePoissonSampling = true;
				generator.bias = 0.000001;
				generator.blurScale = 1;
				generator.transparencyShadow = true;
				generator.darkness = 0.6;

				generator.addShadowCaster(icosahedron);

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
					scene.meshes[i].receiveShadows = true;
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
			<canvas id='babylonCanvas'>
				当前浏览器不支持canvas，尝试更换Google Chrome浏览器尝试
			</canvas>
			<div className="pfs-info">FPS: <span id="FPS"></span></div>
		</div>
	);
}

export default BabylonBox;
