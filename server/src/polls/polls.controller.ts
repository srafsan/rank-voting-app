import { Body, Controller, Post } from '@nestjs/common';
import { CreatePollDto, JoinPollDto } from './dtos';
import { PollsService } from './polls.service';

@Controller('polls')
export class PollsController {
  constructor(private pollService: PollsService) {}

  @Post()
  async create(@Body() createPollDto: CreatePollDto) {
    const result = await this.pollService.createPoll(createPollDto);
    return result;
  }

  @Post('/join')
  async join(@Body() joinPollDto: JoinPollDto) {
    const result = await this.pollService.joinPoll(joinPollDto);
    return result;
  }

  @Post('/rejoin')
  async rejoin() {
    const result = await this.pollService.rejoinPoll({
      name: 'From token',
      pollID: 'also from token',
      userID: 'this is user id',
    });

    return result;
  }
}
