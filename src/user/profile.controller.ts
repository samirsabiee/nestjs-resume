import {Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile} from '@nestjs/common';
import {ProfileService} from "./profile.service";
import {CreateProfileDto} from "./dto/create-profile.dto";
import {UpdateProfileDto} from "./dto/update-profile.dto";
import {FileInterceptor} from "@nestjs/platform-express";
import {diskStorage} from 'multer'

@Controller('profile')
export class ProfileController {
    constructor(private readonly profileService: ProfileService) {
    }

    @Post()
    @UseInterceptors(FileInterceptor('avatar', {
        limits: {
            fileSize: 1024 * 1024 * 5,
        },
        storage: diskStorage({
            destination: (req, file, cb) => cb(null, './avatars'),
            filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)
        })
    }))
    create(userId:string, @Body() createProfileDto: CreateProfileDto, @UploadedFile() file) {
        createProfileDto.avatar = file.path
        return this.profileService.create(createProfileDto);
    }

    @Get()
    findAll() {
        return this.profileService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.profileService.findOne(+id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateProfileDto: UpdateProfileDto) {
        return this.profileService.update(+id, updateProfileDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.profileService.remove(+id);
    }
}
