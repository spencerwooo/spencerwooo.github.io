<template>
  <section class="pre-post-meta main-div">
    <section class="post-date clearfix">
      <span class="create-date">
        <i class="fa fa-calendar" aria-hidden="true"></i> 发布日期 {{ $page.createdAt }}
      </span>

      <span
        v-if="$page.updatedAt"
        class="update-date"
      >
        <i class="fa fa-pencil" aria-hidden="true"></i> 更新日期 {{ $page.updatedAt }}
      </span>
    </section>
  </section>
</template>

<script>
export default {
  name: 'PrePostMeta',
}
</script>

<style lang="stylus" scoped>
@require '~@theme/styles/variables'

.pre-post-meta
  .post-date
    color lighten($grayTextColor, 50%)
    // margin-bottom 1rem
    .create-date
      float left
    .update-date
      float right

    // .read-time
    //   margin-right 1rem
</style>
