import { Request, Response } from 'express';
import PostModel, { Post } from '../models/Post';
import moment, { locale } from 'moment';

class IndexController {
    public async index(req: Request, res: Response): Promise<void> {

        const tmpPosts: Post[] = await PostModel.find({ createdAt: { $gte: moment('2021-01-12').startOf('day'), $lte: moment('2021-01-12').endOf('day') } });
        let posts: any = [];
        tmpPosts.forEach(el => {
            posts.push({
                title: el.title,
                content: el.content,
                date: moment(el.date).utcOffset(el.offset).format()
            });
        })
        console.log(posts)
        res.render('index', { title: 'Welcome to typescript', posts: posts });
    }
    public async savePost(req: Request, res: Response) {
        const post: Post = new PostModel({
            title: 'Titulo 1',
            content: 'Contenido del post',
            date: new Date(),
            offset: moment(new Date()).utcOffset()
        });
        await post.save();
        res.send('guardado')
    }


}

export const indexController = new IndexController();

