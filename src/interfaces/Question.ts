interface Question {
  q: string,
  a: string
}

interface QuestionSet {
  name: string,
  questions: Question[]
}

export type { Question, QuestionSet }