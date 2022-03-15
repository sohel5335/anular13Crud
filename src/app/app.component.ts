import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FriendService } from './friend.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private service:FriendService){}
  title = 'FriendFontend';
  Friend=new FormGroup({
        Id :new FormControl(0),
        Name :new FormControl(''),
        FriendType :new FormControl(''),
        isClose :new FormControl(false),
        BirthDate:new FormControl(new Date()),
        Gendar :new FormControl('Male')
  });
  Save():void{
    this.service.save(this.Friend.value).subscribe(data=>{
      debugger;
       alert(data.id);
    });
  }
  get(id:any)
  {
    debugger;
    this.service.get( parseInt( id)).subscribe(data=>{
      debugger;
       this.Friend.setValue({Id:data.id,Name:data.name,FriendType:data.friendType,isClose:data.isClose,BirthDate:new Date(),Gendar:data.gendar})
    });
  }
  Delete()
  {
    debugger;
    this.service.Delete( parseInt( this.Friend.value.Id)).subscribe(data=>{
      debugger;
       alert('done');
    });
  }
}
