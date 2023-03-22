<script>
  export let posts = [];
</script>

<ul
  class="mt-12 items-start justify-between space-y-36 pb-36 lg:flex lg:space-y-0 lg:space-x-8 lg:pb-0"
>
  {#each posts as post}
    <div class="group relative w-full">
      <a href="/blog/{post.slug}">
        <div>
          <div
            class="mx-auto w-4/5 overflow-hidden rounded-3xl lg:ml-0 lg:w-[90%]"
          >
            <img
              src={post.coverImage}
              alt="TODO: support alt text"
              class="w-full transform transition-all duration-300 ease-in-out group-hover:scale-110"
            />
          </div>
        </div>

        <div
          class="absolute -bottom-24 left-0 rounded-3xl p-8 bg-gray-100 md:left-10 lg:right-0 "
          style="box-shadow: 0 20px 40px rgb(50 65 141 / 12%);"
        >
          <span class="pre-line-top-title text-base text-primary-700"
            >{post.date}</span
          >
          <h5 class="h5 mt-5 mb-0">{post.title}</h5>
        </div>
      </a>
    </div>

    <!-- <li>
      <article>
        <a href="/blog/{post.slug}">
          <img
            src={post.coverImage}
            alt=""
            width={post.coverWidth}
            height={post.coverHeight}
            style="ratio: {post.coverWidth} / {post.coverHeight}"
          />
          <h2>
            {post.title}
          </h2>
        </a>
      </article>

      <p>{post.excerpt}</p>
    </li> -->
  {/each}
</ul>
