import prisma from "@helpers/prisma";

export default async function handle(req, res) {
  const { name, email, _notes, _date, attendee } = req.body;

  const result = await prisma.booking.create({
    data: {
      schedule_date: _date,
      attendee_id: attendee,
      additional_notes: _notes,
      owner_name: name,
      owner_email: email,
    },
  });
  res.json(result);
}
