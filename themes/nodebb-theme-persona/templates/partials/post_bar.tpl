<div class="topic-main-buttons pull-right inline-block">
    <span class="loading-indicator btn pull-left hidden" done="0">
        <span class="hidden-xs">[[topic:loading_more_posts]]</span> <i class="fa fa-refresh fa-spin"></i>
    </span>

    <div class="search-bar" style="margin-left: 10px; padding-left: 5px;">
        <input type="text" id="searchInput" placeholder="Search by Username..." style="width: 200px;">
        <button id="searchButton" class="btn btn-sm btn-primary">Search</button>
    </div>

    <!-- IF loggedIn -->
    <button component="topic/mark-unread" class="btn btn-sm btn-default" title="[[topic:mark_unread]]">
        <i class="fa fa-fw fa-inbox"></i><span class="visible-sm-inline visible-md-inline visible-lg-inline"></span>
    </button>
    <!-- ENDIF loggedIn -->

    <!-- IMPORT partials/topic/watch.tpl -->

    <!-- IMPORT partials/topic/sort.tpl -->

    <div class="inline-block">
    <!-- IMPORT partials/thread_tools.tpl -->
    </div>
    <!-- IMPORT partials/topic/reply-button.tpl -->

    <script>
       
        const searchInput = document.getElementById("searchInput");
        let username_searched = "";

        searchInput.addEventListener("input", function(event) {
            username_searched = event.target.value;
        });

        const searchButton = document.getElementById("searchButton");
        searchButton.addEventListener("click", function() {
            console.log(username_searched);
        });

        
    </script>
</div>
