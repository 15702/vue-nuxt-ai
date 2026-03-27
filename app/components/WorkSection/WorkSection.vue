<!-- input: work items -->
<!-- output: WorksSection UI block -->
<!-- description: 作品展示区 -->
<template>
  <section class="work">
    <div class="inner">
      <h2 class="title">我的作品</h2>
      
      <div class="work-grid">
        <div v-for="item in works" :key="item.id" class="work-card">
          <div class="work-card-inner">
            <div class="work-card-content">
              <h3 class="work-card-title">{{ item.title }}</h3>
              <p class="work-card-description">{{ item.description }}</p>
              <div class="work-card-tags">
                <span v-for="tag in item.tags" :key="tag" class="work-card-tag">{{ tag }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
export interface WorkItem {
  id: string
  title: string
  description: string
  tags: string[]
}

export interface WorkSectionProps {
  works: WorkItem[]
}

const props = defineProps<WorkSectionProps>()
</script>

<style lang="less" scoped>
@import './WorkSection.less';
</style>