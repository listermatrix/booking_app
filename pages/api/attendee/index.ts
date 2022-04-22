import { getSession } from "next-auth/react";

import prisma from "@helpers/prisma";

export default async function handle(req, res) {
  const { name, email } = req.body;

  const session = await getSession({ req });
  const result = await prisma.attendee.create({
    data: {
      name: name,
      email: email,
    },
  });
  res.json(result);
}
