import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { Item } from 'src/entities/item.entity';
import { ItemsService } from './items.service';

@Controller('items')
export class ItemsController {
    constructor(private readonly itemsService: ItemsService) { }

    @Get()
    async findAll(): Promise<Item[]> {
        return await this.itemsService.findAll();
    }

    @Get(':id')
    async findById(@Param('id', ParseUUIDPipe) id: string): Promise<Item> {
        return await this.itemsService.findById(id);
    }

    @Post()
    async create(@Body() CreateItemDto: CreateItemDto): Promise<Item> {
        return await this.itemsService.create(CreateItemDto);
    }

    @Patch(':id')
    async updateStatus(@Param('id', ParseUUIDPipe) id: string): Promise<Item> {
        return await this.itemsService.updateStatus(id);
    }

    @Delete(':id')
    async delete(@Param('id', ParseUUIDPipe) id: string): Promise<void> {
        await this.itemsService.delete(id);
    }
}
