import { defineConfig, presetAttributify, presetIcons, presetTypography, presetUno, transformerDirectives, transformerVariantGroup } from 'unocss'

import { presetHeroPatterns } from '@julr/unocss-preset-heropatterns'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({ scale: 1.1 }),
    presetTypography({ cssExtend: { 'ul,ol': { 'padding-left': '2.25em', 'position': 'relative' } } }),
    presetHeroPatterns(),
  ],
  transformers: [transformerVariantGroup(), transformerDirectives()],
  shortcuts: {
    'fc': 'flex justify-center',
    'fi': 'flex items-center',
    'fb': 'flex justify-between',
    'fcc': 'fc items-center',
    'fie': 'fi justify-end',
    'col-fcc': 'flex-col fcc',
    'inline-fcc': 'inline-flex items-center justify-center',
    'base-focus': 'focus:(bg-op-20 ring-0 outline-none)',
    'b-slate-link': 'border-b border-($c-fg-70 none) hover:border-dashed',
    'gpt-title': 'text-2xl font-extrabold',
    'gpt-subtitle': 'text-(2xl transparent) font-extrabold bg-(clip-text gradient-to-r) from-emerald-400 to-sky-200 dark:to-sky-400',
    'gpt-copy-btn': 'absolute top-12px right-12px z-3 fcc border b-transparent w-fit min-w-8 h-8 p-2 bg-$c-fg-5 hover:bg-$c-fg-10 cursor-pointer transition-all duration-150 active:scale-90 op-0 group-hover:op-100 rounded-1.1',
    'gpt-retry-btn': 'fi gap-1 px-2 py-0.5 op-70 ring-1.2 ring-$c-fg-50 rounded-md text-sm <sm:text-xs <sm:ring-$c-fg-30 cursor-pointer hover:bg-$c-fg-5 transition-background-color',
    'gpt-back-top-btn': 'fcc text-base fixed bottom-17px right-17px sm:(bottom-20px right-20px) z-10 cursor-pointer',
    'gpt-password-input': 'px-4 py-3 h-12 rounded-sm bg-(slate op-15) base-focus',
    'gpt-password-submit': 'fcc h-12 w-12 bg-slate cursor-pointer bg-op-20 hover:bg-op-50',
    'gen-slate-btn': 'min-w-12 max-w-12 min-h-12 p-0 grid place-items-center bg-$c-fg-10 hover:bg-$c-fg-15 focus-visible:ring-1.5 ring-$c-fg-40 rounded-sm <sm:min-h-10 <sm:min-w-10 select-none transition-background-color outline-none',
    'gen-cb-wrapper': 'h-12 my-4 fcc gap-4 bg-$c-fg-10 rounded-sm <sm:h-10 <sm:text-sm select-none',
    'gen-cb-stop': 'px-2 py-0.5 ring-1.2 ring-$c-fg-50 rounded-md text-sm op-70 cursor-pointer hover:bg-$c-fg-5 <sm:text-xs <sm:ring-$c-fg-30 <sm:px-1 <sm:px-1.5 <sm:py-0.4 transition-background-color',
    'gen-text-wrapper': 'my-4 fc gap-2 transition-opacity items-end',
    'gen-textarea': 'w-full p-3 min-h-12 max-h-40vh rounded-sm bg-$c-fg-10 resize-none focus:(bg-$c-fg-15 outline-none) placeholder:op-50 dark:(placeholder:op-30) scroll-pa-8px <sm:min-h-10 <sm:p-2.2 <sm:text-3.6 transition-background-color',
    'sys-edit-btn': 'inline-fcc gap-1 text-sm bg-$c-fg-10 px-2 py-1 rounded-md transition-colors md:transition-background-color cursor-pointer hover:bg-$c-fg-15',
    'stick-btn-on': 'text-$c-bg !bg-$c-fg hover:!bg-$c-fg-80',
    'reverse-self-msg': 'flex-row-reverse text-right [&_pre]:text-left',
  },
})
