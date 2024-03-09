<template>
  <div class="flex flex-col">
    <SidebarRightPreviewCard title="What's happening">
      <SidebarRightPreviewCardItem v-for="item in whatsHappeningItems" :key="item.title">
        <h2 class="font-bold text-gray-800 text-md dark:text-white">{{ item.title }}</h2>
        <p class="text-gray-400 text-xs">{{ item.count }}</p>
      </SidebarRightPreviewCardItem>
    </SidebarRightPreviewCard>
    <SidebarRightPreviewCard title="Who to follow">
      <SidebarRightPreviewCardItem v-for="item in whoToFollowItems" :key="item.title">
        <div class="flex justify-between items-center p-2">
          <div class="flex items-center">
            <img class="w-10 h-10 rounded-full" :src="item.image" :alt="item.name">
            <div class="flex flex-col ml-2">
              <h2 class="text-sm font-bold text-gray-800 dark:text-white">{{ item.name }}</h2>
              <p class="text-xs text-gray-400">{{ item.handle }}</p>
            </div>
          </div>
          <button class="px-4 py-2 text-xs font-bold text-white dark:text-black bg-black dark:bg-white rounded-full">
            Follow
          </button>
        </div>
      </SidebarRightPreviewCardItem>
    </SidebarRightPreviewCard>
  </div>
</template>

<script setup>

const whatsHappeningItems = ref([
  {
    title: 'SpaceX',
    count: '18.8k Tweets'
  },
  {
    title: '#CodingIsFun',
    count: '8.8k Tweets'
  },
  {
    title: '#artforall',
    count: '1.8k Tweets'
  }
])

const whoToFollowItems = ref([
  {
    name: 'Elon Musk',
    handle: '@elonmusk',
    image: 'https://i.pravatar.cc/300'
  },
  {
    name: 'Elon Musk',
    handle: '@elonmusk',
    image: 'https://i.pravatar.cc/300'
  },
  {
    name: 'Elon Musk',
    handle: '@elonmusk',
    image: 'https://i.pravatar.cc/300'
  }

])

</script>
