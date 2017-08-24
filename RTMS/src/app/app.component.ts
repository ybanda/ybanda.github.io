import {Component,OnInit,OnDestroy,DoCheck} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {FormControl,FormGroup,FormBuilder} from '@angular/forms';
import {HttpModule} from '@angular/http';
import * as Immutable from 'immutable';
@Component({
    selector: 'my-app',
    templateUrl:'./app.component.html',
    providers:[HttpModule]
   
            
    })
export class AppComponent implements OnInit,OnDestroy,DoCheck {
    
    formVal:FormGroup;
    isLoading = true;
  
    ngOnInit(){
        console.log(" Inside Ng On Init");   
    
    }

    ngOnDestroy(){
        console.log(" Inside Ng On Destroy");
    }

    constructor(fb:FormBuilder){
      
    }
   

    title="Yashwanth`s First Angular 2/4 App";
    url="https://www.google.com";
    isActive=false;
    isLoved=true;

    post={
        title:"Title",
        isFavorite:true,
        newValue:10,
    }

    onDivClick($event){
        console.log("On Div Click Clicked",$event);
    }

    onClick($event){
        $event.stopPropagation();
        console.log("On Click Clicked",$event);
    }

    onFavoriteChange($event){
        console.log("onFavoriteChange",$event);
        this.post.newValue=$event.newValue;
    }

    ngDoCheck(){
       // console.log("AppComp - Docheck()");
    }
   
   
}