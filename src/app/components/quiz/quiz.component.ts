import { Component, OnInit } from '@angular/core';
import quizz_questions from "../../../assets/data/quizz_questions.json"
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css'
})
export class QuizComponent implements OnInit{
  
  title:string=""

  questions: any
  questionsSelected: any

  answers:string[] = []
  answersSelected:string = ""

  questionIndex:number = 0
  questionMaxIndex:number = 0

  finished:boolean = false
  constructor(){

  }

  ngOnInit(): void {
    if(quizz_questions){
      this.finished=false
      this.title = quizz_questions.title

      this.questions= quizz_questions.questions
      this.questionsSelected = this.questions[this.questionIndex]

      this.questionIndex = 0
      this.questionMaxIndex = this.questions.length
    }
  }
  playerChoice(value:string){
    this.answers.push(value)
    this.nextStep()
  }

  async nextStep(){
    this.questionIndex+=1
    if(this.questionMaxIndex > this.questionIndex){
        this.questionsSelected = this.questions[this.questionIndex]
    }else{
      const finalA: string = await this.checkResult(this.answers)
      this.finished = true
      this.answersSelected = quizz_questions.results[finalA as keyof typeof quizz_questions.results]
    }
  }

  async checkResult(answers:string[]){
    const res = answers.reduce((previous, current, i, arr) => {
      if(
        arr.filter(item => item === previous).length > arr.filter(item => item === current).length )
      {
        return previous
      }else{
        return current
      }
    })
    return res
  }
  
  resetTest(){
    this.questionIndex = 0
    this.questionsSelected = this.questions[this.questionIndex]
    this.finished = false
  }
}
