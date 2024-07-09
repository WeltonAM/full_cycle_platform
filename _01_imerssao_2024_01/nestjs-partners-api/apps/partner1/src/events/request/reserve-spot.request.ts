import { TicketKind } from '@prisma/client';

export class ReserveSpotRequest {
  spot: string[];
  ticket_kind: TicketKind;
  email: string;
}
