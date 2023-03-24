"use client"
import * as RadixAvatar from '@radix-ui/react-avatar';

export function Avatar() {
  return (
    <RadixAvatar.Root className="bg-blackA3 inline-flex h-[64px] w-[64px] select-none items-center justify-center overflow-hidden rounded-full align-middle">
      <RadixAvatar.Image
        className="h-full w-full rounded-[inherit] object-cover"
        src="https://github.com/jeanmrtns.png"
        alt="Jean Martins"
      />
      <RadixAvatar.Fallback
        className="text-violet11 leading-1 flex h-full w-full items-center justify-center bg-white text-[15px] font-medium"
        delayMs={600}
      >
        CT
      </RadixAvatar.Fallback>
    </RadixAvatar.Root>
)
}
