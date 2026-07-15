import { Body, Controller, Get, Post } from "@nestjs/common";
import { ContactService } from "./contact.service";
import { CreateContactDto } from "./dto/create-contact.dto";

@Controller("contact")
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post()
  create(@Body() dto: CreateContactDto) {
    return this.contactService.create(dto);
  }

  // Handy while wiring up the frontend locally — remove or protect this
  // behind auth before shipping to production.
  @Get()
  findAll() {
    return this.contactService.findAll();
  }
}
