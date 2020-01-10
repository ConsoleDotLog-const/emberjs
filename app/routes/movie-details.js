import Route from '@ember/routing/route';

export default class MovieDetailsRoute extends Route {
    model(params){
        return this.store.findAll('movie', params.movie_id)

    }
}
