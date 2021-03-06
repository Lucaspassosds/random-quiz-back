import { Module } from '@nestjs/common';
import { QuestionsService } from '../services/questions.service';
import { QuestionsController } from '../controllers/questions.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Question } from '../entities/question.entity';
import { Answer } from '../entities/answer.entity';
import { QuestionType } from '../entities/question-type.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Question, Answer, QuestionType])],
  controllers: [QuestionsController],
  providers: [QuestionsService],
})
export class QuestionsModule {}
