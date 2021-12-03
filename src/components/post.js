import React, { Component } from 'react';
import './css/picture-box.css'


const Post = () => {
    return (
        <div class="col-12">
        <div class="list-group">
          <a href="#" class="list-group-item list-group-item-action active">
            <div>
              <h5>Recent Posts</h5>
            </div>
          </a>
          <a href="#" class="list-group-item list-group-item-action">
            <div>
              <h5>Takota McConner Says:</h5>
              <small class="text-muted">3 days ago</small>
            </div>
            <p>Did nothing today, just layed around and ate food #bestdayever</p>
            <input placeholder="comment.." />
          </a>
          <a href="#" class="list-group-item list-group-item-action">
            <div>
              <h5>Takota McConner Says:</h5>
              <small class="text-muted">4 days ago</small>
            </div>
            <p>Didn't do much today, just layed around and ate food #yolo</p>
            <input placeholder="comment.." />
          </a>
          <a href="#" class="list-group-item list-group-item-action">
            <div>
              <h5>Takota McConner Says:</h5>
              <small class="text-muted">7 days ago</small>
            </div>
            <p>Nothing accomplished today, just layed around and ate food #livingmybestlife</p>
            <input placeholder="comment.." />
          </a>
          <a href="#" class="list-group-item list-group-item-action">
            <div>
              <h5>Takota McConner Says:</h5>
              <small class="text-muted">8 days ago</small>
            </div>
            <p>Slept all day and ate a few meals #killingthegame</p>
            <input placeholder="comment.." />
          </a>
          <a href="#" class="list-group-item list-group-item-action">
            <div>
              <h5>Takota McConner Says:</h5>
              <small class="text-muted">12 days ago</small>
            </div>
            <p>Was taken to the vet - considering puking in my owners shoes. Opinions?</p>
            <input type="text" placeholder=" comment.." />
          </a>
        </div>
      </div> 
    );
}

export default Post
