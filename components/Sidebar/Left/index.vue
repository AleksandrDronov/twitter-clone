<template>
  <div class="h-screen flex flex-col">
    <div class="p-2 my-2 rounded-full hover:bg-blue-50 w-min dark:hover:bg-white/20" :class="defaultTransition">
      <nuxt-link to="/">
        <div class="w-8 h-8">
          <LogoTwitter />
        </div>
      </nuxt-link>
    </div>

    <div class="mt-2 space-y-3">
      <SidebarLeftTab v-for="tab in tabs" :key="tab.name">
        <template v-slot:icon>
          <component :is="tab.icon" />
        </template>
        <template v-slot:name>
          {{ tab.name }}
        </template>
      </SidebarLeftTab>
    </div>
  </div>
</template>

<script setup>
import { HomeIcon } from '@heroicons/vue/16/solid';
import { BookmarkIcon, BellIcon, DocumentTextIcon, EllipsisHorizontalCircleIcon, HashtagIcon, InboxIcon, UserIcon } from '@heroicons/vue/24/outline';

const tabs = [
  {
    name: 'Home',
    icon: HomeIcon
  },
  {
    name: 'Explore',
    icon: HashtagIcon
  },
  {
    name: 'Notifications',
    icon: BellIcon
  },
  {
    name: 'Messages',
    icon: InboxIcon
  },
  {
    name: 'Bookmarks',
    icon: BookmarkIcon
  },
  {
    name: 'Lists',
    icon: DocumentTextIcon
  },
  {
    name: 'Profile',
    icon: UserIcon
  },
  {
    name: 'More',
    icon: EllipsisHorizontalCircleIcon
  }
]

const { defaultTransition } = useTailwindConfig();
</script>
