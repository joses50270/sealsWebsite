import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth/auth.service';
import { baseUrl } from '../_services/baseUrl/httpBaseUrl';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';
import {ActivatedRoute} from "@angular/router";
import { NgForm , NgModel} from '@angular/forms';
import { error } from 'util';
import { CommentService } from '../_services/comment/comment.service';

class CommentForm{
  content: String;
  discussionId: String;
  child: Boolean;
}


class Blog {
  author: String;
  content: String;
  id: String;
  timeStamp: Date;
}

interface CommentInterface {
  name: String,
  content: String,
  discussionId: String,
  child: Boolean,
}

interface BlogInterface{
  author: String;
  content: String;
  id: String;
  timeStamp: Date;
}

interface ServerResponse{
  type: boolean;
  data: any;
}

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  animations: [

    trigger('goals', [
      transition('* => *', [

        query(':enter', style({ opacity: 0 }), {optional: true}),

        query(':enter', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
            style({opacity: 1, transform: 'translateY(0)',     offset: 1.0}),
          ]))]), {optional: true})
      ])
    ])
  ]
})



export class BlogComponent implements OnInit {

  public blog: Blog;
  public headerID;
  public httpHead;
  
  public commentForm: CommentForm;
  public newComment: CommentForm;
  public comments: any = [];
  public cycleComments;

  itemCount: number = 4;
  btnText: string = 'Add a comment';
  goalText: string = 'My first comment';
  goals = [];

  
  blogs: Blog;
  currentBlog:any;

  constructor(private route: ActivatedRoute, private router: Router, public user: HttpClient, private authService: AuthService, private commentService:CommentService) { 
    this.route.params.subscribe(( params ) => {
      this.headerID = params.id;
      this.pullData();
      console.log(params)
    });
   }

   addComment() {
   this.commentForm.discussionId = this.headerID;
   console.log(this.commentForm)
   this.user.post( baseUrl + '/comments', this.commentForm)
   .subscribe((res:ServerResponse)=> {
     console.log(res)
   })
  }

  ngOnInit() {
    // const headers = new HttpHeaders().set('headerID', this.headerID);

    // this.blog = new Blog();
    // this.commentForm = new CommentForm();
    // this.itemCount = this.goals.length;

    // this.user.get(baseUrl + '/comments',{headers})
    // .subscribe((data: CommentInterface) => {
    //  this.commentForm = data;
    //  this.cycleComments = this.commentForm;
    //  console.log(this.commentForm)
    // });
    // this.commentForm = new CommentForm;


    // this.user.get(baseUrl + '/blogPost', {
    //   headers: new HttpHeaders().set('headerID', this.headerID)
    // })
    // .subscribe((data: BlogInterface) => {
    //   this.blog = data;
    //   console.log(this.blog);
    // });

  }
  addItem(){
    this.goals.push(this.goalText);
    this.goalText = '';
    this.itemCount = this.goals.length;
    console.log(this.commentForm);
  }
  pullData(){
    const headers = new HttpHeaders().set('ID', this.headerID);

    this.blog = new Blog;

    this.user.get(baseUrl + '/blogPost',{
      headers: new HttpHeaders().set('headerID', this.headerID)
    })
    .subscribe((data: BlogInterface) => {
      this.blog = data;
      console.log(this.blog)
    });
    this.user.get(baseUrl + '/comments', { headers })
      .subscribe((data: CommentInterface) => {
        this.commentForm = data;
        this.cycleComments = this.commentForm;
        console.log(this.commentForm);
      });
    this.commentForm = new CommentForm;
    this.newComment = new CommentForm;

  }
  onSubmit(){
    this.newComment.discussionId = this.headerID;
    console.log(this.newComment)
    this.commentService.comment(this.newComment)
    .subscribe((res: ServerResponse) => {
      if (error) {
        throw error;   
      }
      console.log(res)
      this.newComment.content = ""
      alert('Message has been sent')
      window.location.reload()
    })
  }
}
