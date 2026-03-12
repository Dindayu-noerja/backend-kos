import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class KosService {

  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.kos.findMany({
      include: {
        images: true,
        facilities: true
      }
    });
  }

  findOne(id: number) {
    return this.prisma.kos.findUnique({
      where: { id }
    });
  }

  create(data: any) {
    return this.prisma.kos.create({
      data
    });
  }

  update(id: number, data: any) {
    return this.prisma.kos.update({
      where: { id },
      data
    });
  }

  remove(id: number) {
    return this.prisma.kos.delete({
      where: { id }
    });
  }
}