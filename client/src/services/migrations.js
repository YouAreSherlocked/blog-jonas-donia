import * as fetch from './index';
import * as seedingData from './seedingData';

export const migratePosts = () => {
    seedingData.posts.forEach(post => {
        fetch.posts.postPost(post)
    });
}