import { useEffect } from 'react';
import * as BABYLON from 'babylonjs';
import { FloatArray } from 'babylonjs';
import { PerlinNoise } from "./perlin";
import start_addr from "/img/babylonImg/jianbian.jpg"

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
			if (event.detail === 'play') {
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
				const icosahedron = BABYLON.MeshBuilder.CreateGeodesic("icosahedron1", { m: 1, n: 1, size: 2, updatable: true });

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

				var nodeMaterial = new BABYLON.NodeMaterial("node");

				// InputBlock
				var position = new BABYLON.InputBlock("position");
				position.visibleInInspector = false;
				position.visibleOnFrame = false;
				position.target = 1;
				position.setAsAttribute("position");

				// TransformBlock
				var WorldPos = new BABYLON.TransformBlock("WorldPos");
				WorldPos.visibleInInspector = false;
				WorldPos.visibleOnFrame = false;
				WorldPos.target = 1;
				WorldPos.complementZ = 0;
				WorldPos.complementW = 1;

				// InputBlock
				var World = new BABYLON.InputBlock("World");
				World.visibleInInspector = false;
				World.visibleOnFrame = false;
				World.target = 1;
				World.setAsSystemValue(BABYLON.NodeMaterialSystemValues.World);

				// TransformBlock
				var WorldPosViewProjectionTransform = new BABYLON.TransformBlock("WorldPos * ViewProjectionTransform");
				WorldPosViewProjectionTransform.visibleInInspector = false;
				WorldPosViewProjectionTransform.visibleOnFrame = false;
				WorldPosViewProjectionTransform.target = 1;
				WorldPosViewProjectionTransform.complementZ = 0;
				WorldPosViewProjectionTransform.complementW = 1;

				// InputBlock
				var ViewProjection = new BABYLON.InputBlock("ViewProjection");
				ViewProjection.visibleInInspector = false;
				ViewProjection.visibleOnFrame = false;
				ViewProjection.target = 1;
				ViewProjection.setAsSystemValue(BABYLON.NodeMaterialSystemValues.ViewProjection);

				// VertexOutputBlock
				var VertexOutput = new BABYLON.VertexOutputBlock("VertexOutput");
				VertexOutput.visibleInInspector = false;
				VertexOutput.visibleOnFrame = false;
				VertexOutput.target = 1;

				// TransformBlock
				var Transform = new BABYLON.TransformBlock("Transform");
				Transform.visibleInInspector = false;
				Transform.visibleOnFrame = false;
				Transform.target = 1;
				Transform.complementZ = 0;
				Transform.complementW = 1;

				// InputBlock
				var View = new BABYLON.InputBlock("View");
				View.visibleInInspector = false;
				View.visibleOnFrame = false;
				View.target = 1;
				View.setAsSystemValue(BABYLON.NodeMaterialSystemValues.WorldView);

				// NormalizeBlock
				var Normalize = new BABYLON.NormalizeBlock("Normalize");
				Normalize.visibleInInspector = false;
				Normalize.visibleOnFrame = false;
				Normalize.target = 2;

				// CrossBlock
				var Cross = new BABYLON.CrossBlock("Cross");
				Cross.visibleInInspector = false;
				Cross.visibleOnFrame = false;
				Cross.target = 2;

				// TransformBlock
				var Transform1 = new BABYLON.TransformBlock("Transform");
				Transform1.visibleInInspector = false;
				Transform1.visibleOnFrame = false;
				Transform1.target = 1;
				Transform1.complementZ = 0;
				Transform1.complementW = 0;

				// InputBlock
				var normal = new BABYLON.InputBlock("normal");
				normal.visibleInInspector = false;
				normal.visibleOnFrame = false;
				normal.target = 1;
				normal.setAsAttribute("normal");

				// InputBlock
				var View1 = new BABYLON.InputBlock("View");
				View1.visibleInInspector = false;
				View1.visibleOnFrame = false;
				View1.target = 1;
				View1.setAsSystemValue(BABYLON.NodeMaterialSystemValues.WorldView);

				// VectorSplitterBlock
				var VectorSplitter = new BABYLON.VectorSplitterBlock("VectorSplitter");
				VectorSplitter.visibleInInspector = false;
				VectorSplitter.visibleOnFrame = false;
				VectorSplitter.target = 2;

				// VectorMergerBlock
				var VectorMerger = new BABYLON.VectorMergerBlock("VectorMerger");
				VectorMerger.visibleInInspector = false;
				VectorMerger.visibleOnFrame = false;
				VectorMerger.target = 2;
				VectorMerger.xSwizzle = "x";
				VectorMerger.ySwizzle = "y";
				VectorMerger.zSwizzle = "z";
				VectorMerger.wSwizzle = "w";

				// AddBlock
				var Add = new BABYLON.AddBlock("Add");
				Add.visibleInInspector = false;
				Add.visibleOnFrame = false;
				Add.target = 2;

				// InputBlock
				var Vector = new BABYLON.InputBlock("Vector3");
				Vector.visibleInInspector = false;
				Vector.visibleOnFrame = false;
				Vector.target = 1;
				Vector.value = new BABYLON.Vector3(1, 1, 1);
				Vector.isConstant = false;

				// MultiplyBlock
				var Multiply = new BABYLON.MultiplyBlock("Multiply");
				Multiply.visibleInInspector = false;
				Multiply.visibleOnFrame = false;
				Multiply.target = 2;

				// InputBlock
				var Vector1 = new BABYLON.InputBlock("Vector3");
				Vector1.visibleInInspector = false;
				Vector1.visibleOnFrame = false;
				Vector1.target = 1;
				Vector1.value = new BABYLON.Vector3(0.5, 0.5, 0.5);
				Vector1.isConstant = false;

				// VectorSplitterBlock
				var VectorSplitter1 = new BABYLON.VectorSplitterBlock("VectorSplitter");
				VectorSplitter1.visibleInInspector = false;
				VectorSplitter1.visibleOnFrame = false;
				VectorSplitter1.target = 2;

				// TextureBlock
				var Texture = new BABYLON.TextureBlock("Texture");
				Texture.visibleInInspector = false;
				Texture.visibleOnFrame = false;
				Texture.target = 2;
				Texture.convertToGammaSpace = false;
				Texture.convertToLinearSpace = false;
				Texture.disableLevelMultiplication = false;
				Texture.texture = new BABYLON.Texture(start_addr,scene)
				Texture.texture.wrapU = 1;
				Texture.texture.wrapV = 1;
				Texture.texture.uAng = 0;
				Texture.texture.vAng = 0;
				Texture.texture.wAng = 0;
				Texture.texture.uOffset = 0;
				Texture.texture.vOffset = 0;
				Texture.texture.uScale = 1;
				Texture.texture.vScale = 1;
				Texture.texture.coordinatesMode = 7;

				// FragmentOutputBlock
				var FragmentOutput = new BABYLON.FragmentOutputBlock("FragmentOutput");
				FragmentOutput.visibleInInspector = false;
				FragmentOutput.visibleOnFrame = false;
				FragmentOutput.target = 2;
				FragmentOutput.convertToGammaSpace = false;
				FragmentOutput.convertToLinearSpace = false;
				FragmentOutput.useLogarithmicDepth = false;

				// PowBlock
				var Pow = new BABYLON.PowBlock("Pow");
				Pow.visibleInInspector = false;
				Pow.visibleOnFrame = false;
				Pow.target = 4;

				// ScaleBlock
				var Scale = new BABYLON.ScaleBlock("Scale");
				Scale.visibleInInspector = false;
				Scale.visibleOnFrame = false;
				Scale.target = 4;

				// ScreenSpaceBlock
				var ScreenSpace = new BABYLON.ScreenSpaceBlock("ScreenSpace");
				ScreenSpace.visibleInInspector = false;
				ScreenSpace.visibleOnFrame = false;
				ScreenSpace.target = 2;

				// InputBlock
				var worldViewProjection = new BABYLON.InputBlock("worldViewProjection");
				worldViewProjection.visibleInInspector = false;
				worldViewProjection.visibleOnFrame = false;
				worldViewProjection.target = 1;
				worldViewProjection.setAsSystemValue(BABYLON.NodeMaterialSystemValues.WorldViewProjection);

				// InputBlock
				var Float = new BABYLON.InputBlock("Float");
				Float.visibleInInspector = false;
				Float.visibleOnFrame = false;
				Float.target = 1;
				Float.value = 2;
				Float.min = 0;
				Float.max = 0;
				Float.isBoolean = false;
				Float.matrixMode = 0;
				Float.animationType = BABYLON.AnimatedInputBlockTypes.None;
				Float.isConstant = false;

				// InputBlock
				var Float1 = new BABYLON.InputBlock("Float");
				Float1.visibleInInspector = false;
				Float1.visibleOnFrame = false;
				Float1.target = 1;
				Float1.value = 10;
				Float1.min = 0;
				Float1.max = 0;
				Float1.isBoolean = false;
				Float1.matrixMode = 0;
				Float1.animationType = BABYLON.AnimatedInputBlockTypes.None;
				Float1.isConstant = false;

				// Connections
				position.output.connectTo(WorldPos.vector);
				World.output.connectTo(WorldPos.transform);
				WorldPos.output.connectTo(WorldPosViewProjectionTransform.vector);
				ViewProjection.output.connectTo(WorldPosViewProjectionTransform.transform);
				WorldPosViewProjectionTransform.output.connectTo(VertexOutput.vector);
				position.output.connectTo(Transform.vector);
				View.output.connectTo(Transform.transform);
				Transform.xyz.connectTo(Normalize.input);
				Normalize.output.connectTo(Cross.left);
				normal.output.connectTo(Transform1.vector);
				View1.output.connectTo(Transform1.transform);
				Transform1.xyz.connectTo(Cross.right);
				Cross.output.connectTo(VectorSplitter.xyzIn);
				VectorSplitter.y.connectTo(VectorMerger.x);
				VectorSplitter.x.connectTo(VectorMerger.y);
				VectorMerger.xyz.connectTo(Add.left);
				Vector.output.connectTo(Add.right);
				Add.output.connectTo(Multiply.left);
				Vector1.output.connectTo(Multiply.right);
				Multiply.output.connectTo(VectorSplitter1.xyzIn);
				VectorSplitter1.xyOut.connectTo(Texture.uv);
				Texture.rgb.connectTo(FragmentOutput.rgb);
				position.output.connectTo(ScreenSpace.vector);
				worldViewProjection.output.connectTo(ScreenSpace.worldViewProjection);
				ScreenSpace.y.connectTo(Scale.input);
				Float.output.connectTo(Scale.factor);
				Scale.output.connectTo(Pow.value);
				Float1.output.connectTo(Pow.power);
				Pow.output.connectTo(FragmentOutput.a);

				// Output nodes
				nodeMaterial.addOutputNode(VertexOutput);
				nodeMaterial.addOutputNode(FragmentOutput);
				nodeMaterial.build();

				icosahedron.material = nodeMaterial;

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
