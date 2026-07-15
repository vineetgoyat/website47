import { Injectable, Logger } from "@nestjs/common";
import { CreateContactDto } from "./dto/create-contact.dto";

export type ContactSubmission = CreateContactDto & {
  id: string;
  receivedAt: string;
};

@Injectable()
export class ContactService {
  private readonly logger = new Logger(ContactService.name);

  // In-memory store for the demo. Swap this for a Postgres/Mongo repository
  // (see the job spec: this is exactly where PostgreSQL or MongoDB would sit)
  // or forward `dto` to an email provider (Resend, SES, etc).
  private submissions: ContactSubmission[] = [];

  create(dto: CreateContactDto): ContactSubmission {
    const submission: ContactSubmission = {
      ...dto,
      id: crypto.randomUUID(),
      receivedAt: new Date().toISOString(),
    };

    this.submissions.push(submission);
    this.logger.log(`New contact message from ${submission.email}`);

    return submission;
  }

  findAll(): ContactSubmission[] {
    return this.submissions;
  }
}
