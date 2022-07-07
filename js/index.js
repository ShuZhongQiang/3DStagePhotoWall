			// const three = require("./three.module.js");
			// const TrackballControls = require("./TrackballControls.js");
			// const CSS3DRenderer, CSS3DRenderer = require("./CSS3DRenderer.js");
			// import * as THREE from './three.module.js';
			import * as THREE from './three.module.js';
			import { TWEEN } from './tween.module.min.js';
			import { TrackballControls } from './TrackballControls.js';
			import { CSS3DRenderer, CSS3DObject } from './CSS3DRenderer.js';
			// 需要126张照片 在数组里填写 照片地址（照片可以通过发布图床形式，或者引用微博上的图片地址，或者是自己直接扔项目中用相对路径引用）
			let requireModule = require.context(
				'../img/',
				false,
				/\.jpg|png|gif$/
			);
			let table = [];
			for (var i = 0; i < requireModule.keys().length; i++) {
					table.push("./img/"+requireModule.keys()[i].substr(2, requireModule.keys()[i].length));
			}
			console.log('requireModule.keys().length', requireModule.keys().length)
			console.log('table',table)

			// const table = [
			// 	'./img/1.jpg',
			// 	'./img/2.jpg',
			// 	'./img/3.jpg',
			// 	'./img/4.jpg',
			// 	'./img/5.jpg',
			// 	'./img/6.jpg',
			// 	'./img/7.jpg',
			// 	'./img/8.jpg',
			// 	'./img/9.jpg',
			// 	'./img/10.jpg',
			// 	'./img/11.jpg',
			// 	'./img/12.jpg',
			// 	'./img/13.jpg',
			// 	'./img/14.jpg',
			// 	'./img/15.jpg',
			// 	'./img/16.jpg',
			// 	'./img/1.jpg',
			// 	'./img/2.jpg',
			// 	'./img/3.jpg',
			// 	'./img/4.jpg',
			// 	'./img/5.jpg',
			// 	'./img/6.jpg',
			// 	'./img/7.jpg',
			// 	'./img/8.jpg',
			// 	'./img/9.jpg',
			// 	'./img/10.jpg',
			// 	'./img/11.jpg',
			// 	'./img/12.jpg',
			// 	'./img/13.jpg',
			// 	'./img/14.jpg',
			// 	'./img/15.jpg',
			// 	'./img/16.jpg',
			// 	'./img/1.jpg',
			// 	'./img/2.jpg',
			// 	'./img/3.jpg',
			// 	'./img/4.jpg',
			// 	'./img/5.jpg',
			// 	'./img/6.jpg',
			// 	'./img/7.jpg',
			// 	'./img/8.jpg',
			// 	'./img/9.jpg',
			// 	'./img/10.jpg',
			// 	'./img/11.jpg',
			// 	'./img/12.jpg',
			// 	'./img/13.jpg',
			// 	'./img/14.jpg',
			// 	'./img/15.jpg',
			// 	'./img/16.jpg',
      //   './img/1.jpg',
			// 	'./img/2.jpg',
			// 	'./img/3.jpg',
			// 	'./img/4.jpg',
			// 	'./img/5.jpg',
			// 	'./img/6.jpg',
			// 	'./img/7.jpg',
			// 	'./img/8.jpg',
			// 	'./img/9.jpg',
			// 	'./img/10.jpg',
			// 	'./img/11.jpg',
			// 	'./img/12.jpg',
			// 	'./img/13.jpg',
			// 	'./img/14.jpg',
			// 	'./img/15.jpg',
			// 	'./img/16.jpg',
			// 	'./img/1.jpg',
			// 	'./img/2.jpg',
			// 	'./img/3.jpg',
			// 	'./img/4.jpg',
			// 	'./img/5.jpg',
			// 	'./img/6.jpg',
			// 	'./img/7.jpg',
			// 	'./img/8.jpg',
			// 	'./img/9.jpg',
			// 	'./img/10.jpg',
			// 	'./img/11.jpg',
			// 	'./img/12.jpg',
			// 	'./img/13.jpg',
			// 	'./img/14.jpg',
			// 	'./img/15.jpg',
			// 	'./img/16.jpg',
			// 	'./img/1.jpg',
			// 	'./img/2.jpg',
			// 	'./img/3.jpg',
			// 	'./img/4.jpg',
			// 	'./img/5.jpg',
			// 	'./img/6.jpg',
			// 	'./img/7.jpg',
			// 	'./img/8.jpg',
			// 	'./img/9.jpg',
			// 	'./img/10.jpg',
			// 	'./img/11.jpg',
			// 	'./img/12.jpg',
			// 	'./img/13.jpg',
			// 	'./img/14.jpg',
			// 	'./img/15.jpg',
			// 	'./img/16.jpg',
			// 	'./img/1.jpg',
			// 	'./img/2.jpg',
			// 	'./img/3.jpg',
			// 	'./img/4.jpg',
			// 	'./img/5.jpg',
			// 	'./img/6.jpg',
			// 	'./img/7.jpg',
			// 	'./img/8.jpg',
			// 	'./img/9.jpg',
			// 	'./img/10.jpg',
			// 	'./img/11.jpg',
			// 	'./img/12.jpg',
			// 	'./img/13.jpg',
			// 	'./img/14.jpg',
			// 	'./img/15.jpg',
			// 	'./img/16.jpg',
			// 	'./img/1.jpg',
			// 	'./img/2.jpg',
			// 	'./img/3.jpg',
			// 	'./img/4.jpg',
			// 	'./img/5.jpg',
			// 	'./img/6.jpg',
			// 	'./img/7.jpg',
			// 	'./img/8.jpg',
			// 	'./img/9.jpg',
			// 	'./img/10.jpg',
			// 	'./img/11.jpg',
			// 	'./img/12.jpg',
			// 	'./img/13.jpg',
			// 	'./img/14.jpg'
			// ];

			let camera, scene, renderer, geometry, material, plane, vector;
			let controls, dom, obj;
			const objects = [];
			const targets = { helix: [] };
			// 可自定义修改变量
			// 旋转速度
			const rSpeed = 0.005;
      // 背景需要旋转的角度 rad  Math.PI / 10
      const rad = Math.PI / 10;

			init();
			animate();

			function init() {

				scene = new THREE.Scene();
				camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 1, 2000 );
				camera.position.z = 1000;

				dom = document.getElementsByClassName( 'plane' )[ 0 ];
				dom.style.background = 'url(./img/one.png) no-repeat center center';
				obj = new CSS3DObject( dom );
				// 添加到场景中
				scene.add( obj );

				for ( let i = 0; i < table.length; i += 1 ) {

					const element = document.createElement( 'div' );
					i >= 84 ? element.className = 'element last-element' : element.className = 'element';
					// element.style.backgroundColor = 'rgba(0,127,127,' + ( Math.random() * 0.5 + 0.25 ) + ')';
					element.style.background = 'url('+table[ i ] +') no-repeat center center';
					element.style.backgroundSize = '100% 100%';
					const objectCSS = new CSS3DObject( element );
					scene.add( objectCSS );
					objects.push( objectCSS );
				}
				// 环绕舞台场景
				let y = 400;
				let x = 0;
				vector = new THREE.Vector3();
				for ( let i = 0, l = objects.length; i < l; i ++ ) {

					x >= 42 ? x = 1 : x += 1;
					const theta = x * 0.15;
					i % 42 == 0 ? y = y - 200 : y = y;

					//实现Object3D对三维空间中的物体进行操纵
					const object = new THREE.Object3D();

					object.position.setFromCylindricalCoords( 1000, theta, y );

					vector.x = object.position.x * - 2;
					vector.y = object.position.y;
					vector.z = object.position.z * - 2;

					// 旋转物体使其在世界空间中面朝一个点
					object.lookAt( vector );

					targets.helix.push( object );

				}
				// 调用并实现CSS3Denderer渲染器
				renderer = new CSS3DRenderer();
				renderer.setSize( window.innerWidth, window.innerHeight );
				document.getElementById( 'container' ).appendChild( renderer.domElement );
				controls = new TrackballControls( camera, renderer.domElement );
				transform( targets.helix, 2000 );
			}
			// 运动动画
			function transform( targets, duration ) {
				for ( let i = 0; i < objects.length; i ++ ) {

					const object = objects[ i ];
					const target = targets[ i ];
					// 借助Tween.js快速创建补间动画
					new TWEEN.Tween( object.position )
						.to( { x: target.position.x, y: target.position.y, z: target.position.z }, Math.random() * duration + duration )
						.easing( TWEEN.Easing.Exponential.InOut )
						.start();

					new TWEEN.Tween( object.rotation )
						.to( { x: target.rotation.x, y: target.rotation.y, z: target.rotation.z }, Math.random() * duration + duration )
						.easing( TWEEN.Easing.Exponential.InOut )
						.start();

				}
        obj.rotateZ(rad);
        camera.rotateZ(rad)
			}

			function onWindowResize() {
				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();
				renderer.setSize( window.innerWidth, window.innerHeight );
				render();
			}

			// 渲染场景
			function animate() {
				// 周期性渲染
				requestAnimationFrame( animate );
				obj.rotation.y += rSpeed;
				scene.rotation.y -= rSpeed;
				TWEEN.update();
				// controls.update();
				renderer.render( scene, camera );
			}
			// 使用透视相机渲染一个场景
			function render() {
				renderer.render( scene, camera );
			}
			// 数组排序方法
			function sort(arr) {
				return arr.sort(function(a,b){
					return a-b;
				});
			}
