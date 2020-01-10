import Route from '@ember/routing/route';

export default class CharactersRoute extends Route {
    model(){
        return this.get('store').findAll('character')
    }
}
