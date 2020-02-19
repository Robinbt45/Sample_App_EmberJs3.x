import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        viewPost(id) {
            this.transitionToRoute("posts.show", id);
        }
    }
});
