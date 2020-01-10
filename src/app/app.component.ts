import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  materials = [];
  mes:string;
  egg(){
    if(this.materials.includes("鸡蛋")){
      return;
    }
    this.materials.push("鸡蛋");
  }

  tomato(){
    if(this.materials.includes("番茄")){
      return;
    }
    this.materials.push("番茄");
  }

  grounded(){
    if(this.materials.includes("肉糜")){
      return;
    }
    this.materials.push("肉糜");
  }

  carrot(){
    if(this.materials.includes("胡萝卜")){
      return;
    }
    this.materials.push("胡萝卜");
  }

  belly(){
    if(this.materials.includes("五花肉")){
      return;
    }
    this.materials.push("五花肉");
  }

  garlic(){
    if(this.materials.includes("蒜苗")){
      return;
    }
    this.materials.push("蒜苗");
  }

  cancook(){
    if(this.materials.includes("鸡蛋") && this.materials.includes("番茄")){
      this.mes="番茄炒蛋完成！";
      return;
    }
    if(this.materials.includes("鸡蛋") && this.materials.includes("肉糜")){
      this.mes="肉饼炖蛋完成！";
      return;
    }
    if(this.materials.includes("胡萝卜") && this.materials.includes("蒜苗") && this.materials.includes("五花肉")){
      this.mes="回锅肉完成！";
      return;
    }
    if(this.materials.length > 0){
      this.mes="黑暗料理完成！";
    }
  }

  reset(){
    this.materials=[];
    this.mes="";
  }
}
