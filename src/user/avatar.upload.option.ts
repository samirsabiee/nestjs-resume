import {diskStorage} from 'multer'
export const avatarUploadOption = {
    limits: {
        fileSize: 1024 * 1024 * 5,
    },
    storage: diskStorage({
        destination: (req, file, cb) => cb(null, './avatars'),
        filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)
    })
}
