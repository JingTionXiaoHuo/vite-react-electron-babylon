import React from "react";

//ts 中类

class Person {
    name: string;//实例属性
    age: number;//实例属性
    //构造函数
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    //实例方法
    sayHi() {
        return "hi, my name is:" + this.name + ",my age is:" + this.age;
    }
    //静态方法
    static hello() {
        console.log("hello!!");
    }
    //静态属性
    static PI: number = Math.PI;
    //静态方法中可以返回静态属性，，静态成员只能使用类名.静态成员的方式进行访问。
    static area(r: number) {
        return Person.PI * r * r;
    }
}

class Student extends Person {
    score: number;//学生成绩，新的成员属性

    constructor(name: string, age: number, score: number) {
        //子类调用父类构造函数进行初始化
        super(name, age);
        this.score = score;
    }

    //子类重写(覆盖)父类中的方法
    sayHi() {
        return "hi,我的姓名是:" + this.name + ",我年龄是:" + this.age + ",我的成绩是:" + this.score;
    }

    //子类中扩展的方法
    study() {
        return this.name + "在学习";
    }
}

class testClass {
    name: string = 'test';
    date_of_brith: number = 0;
    gender: string = 'man';

    //输入
    body_feeling = {
        vision:{

        },
        hearing: {
            
        },
        smell: {
            
        },
        touch: {
            
        },
        taste: {
            
        }
    };

    //输入信息被解析后分成主要信息与次要信息

    //初级输出
    emotions = {
        anger: 0,
        anticipation: 0,
        disgust: 0,
        fear: 0,
        joy: 0,
        sadness: 0,
        surprise: 0,
        trust: 0,
    };

    //次级输出
    behavior = {

    }

    //构造函数
    constructor(test:any) {
        this.name = test.name;
        this.date_of_brith = test.age;
        this.gender = test.gender;
        this.emotions = test.emotions ? test.emotions : {
            anger: 0,
            anticipation: 0,
            disgust: 0,
            fear: 0,
            joy: 0,
            sadness: 0,
            surprise: 0,
            trust: 0,
        };
    }
    //实例方法
    display() {
        console.log(this)
    }
}

/*
关于类中成员访问修饰符:
ts类中成员(成员属性、成员方法)的访问修饰符，类似于java中类成员的访问修饰符，不同的是ts中默认是被public修饰。
public :公有          在当前类里面、 子类  、类外面都可以访问
protected：保护类型    在当前类里面、子类里面可以访问 ，在类外部没法访问
private ：私有         在当前类里面可以访问，子类、类外部都没法访问

属性如果不加修饰符 默认就是公有(public)
*/

function Test() {

    // //计算r为3的圆的面积 ，调用静态方法不需要new实例对象，直接用类名.静态方法调用即可。
    // console.log(Person.area(3)); //28.274333882308138

    // //new 对象
    // var p = new Person("张三", 22);
    // var stu = new Student("李四", 24, 90);

    // //调用对象的(实例)方法
    // console.log(p.sayHi());
    // console.log(stu.sayHi());
    // console.log(stu.study());
    var test1 = new testClass({
        name: 'myl',
        age: 27,
        gender: 'man'
    })

    test1.display();
}

export default Test;