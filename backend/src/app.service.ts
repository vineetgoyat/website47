import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
  getHealth() {
    return { status: "ok", service: "ai47labs-api", time: new Date().toISOString() };
  }
}
