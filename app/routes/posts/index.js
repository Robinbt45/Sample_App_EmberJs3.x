import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return this.store.findAll('post');
    },
    actions: {
        deletePost(post) {
            let confirmed = window.confirm(
                'Are you sure you want to delete this post?'
              );
        
              if (confirmed) {
                post.destroyRecord();
              }
        }
    }
});
