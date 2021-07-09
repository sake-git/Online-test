import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Question } from '../question.model';
import { QuestionnaireService } from '../questionnaire.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  questionList:Array<Question>=[];
  answers:Array<string>=[];
  counter=-1;
  start=true;
  showResult=false;
  disablePrev=true;
  submit=false;
  marks=0;


  questFormGroup:FormGroup=new FormGroup(
    {ans:new FormControl('')})

  constructor(public questService:QuestionnaireService) {
    this.start=false;
    this.displayQuestions();
    this.counter++;
   }

  ngOnInit(): void {
  }

  displayQuestions(){
    this.questService.getQuestions().subscribe(
      (questions)=> this.questionList=questions,
      (error)=> console.log(error)
    );
   }

  previous(){    
    if(this.counter>=1){
      this.counter--;
      this.questFormGroup.patchValue({ans:this.answers[this.counter]});
      this.submit=false;
    }

    if(this.counter<= 0){
      this.disablePrev=true;
    }
  }

  next(){   
    this.answers[this.counter]=this.questFormGroup.value.ans; 

    if(this.counter<this.questionList.length-1){
      this.counter++;
      this.disablePrev=false;
      if(this.counter<= this.answers.length) {      
        this.questFormGroup.patchValue({ans:this.answers[this.counter]});
      } 
      else{
        this.questFormGroup.reset(); 
      }
    }
    else{
      this.submit=true;
    }
  }

  result(){
    this.showResult=true;
    this.marks=0;
    for(let i=0; i<this.questionList.length; i++){
      if(this.questionList[i].answer == this.answers[i])
        this.marks++;
    }
  }
}
