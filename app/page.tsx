'use client'
import { useState } from 'react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'

export default function Home() {
  const [loadingToastId, setLoadingToastId] = useState<string | number | null>(null)
  return (
    <div className={`
      container mx-auto flex min-h-screen flex-wrap content-center items-center
      justify-center gap-8 p-8 pb-20 sm:p-20
    `}
    >
      <Button
        variant="outline"
        onClick={() =>
          toast('Hello World', {
            description: 'This is a toast notification with an action button',
            action: {
              label: 'Undo',
              onClick: () => console.log('Undo'),
            },
          })}
      >
        Show Action Toast
      </Button>

      <Button
        variant="outline"
        onClick={() =>
          toast.success('Success!', {
            description: 'Your changes have been saved successfully.',
          })}
      >
        Show Success Toast
      </Button>

      <Button
        variant="outline"
        onClick={() =>
          toast.error('Error!', {
            description: 'Something went wrong. Please try again later.',
          })}
      >
        Show Error Toast
      </Button>

      <Button
        variant="outline"
        onClick={() =>
          toast.warning('Warning!', {
            description: 'This action might have unintended consequences.',
          })}
      >
        Show Warning Toast
      </Button>

      <Button
        variant="outline"
        onClick={() =>
          toast.info('Information', {
            description: 'Here is some additional information for you.',
          })}
      >
        Show Info Toast
      </Button>

      {/*  Loading */}
      <Button
        variant="outline"
        disabled={!!loadingToastId}
        onClick={() => {
          const id = toast.loading('Loading...', {
            description: 'Please wait while we process your request.',
          })
          setLoadingToastId(id)
        }}
      >
        Show Loading Toast
      </Button>

      {/* close Loading */}
      <Button
        variant="outline"
        disabled={!loadingToastId}
        onClick={() => {
          if (loadingToastId) {
            toast.dismiss(loadingToastId)
            setLoadingToastId(null)
          }
        }}
      >
        Close Loading Toast
      </Button>

      {/* <Button
        variant="outline"
        onClick={() => toast.dismiss()}
      >
        Close All Toasts
      </Button> */}
    </div>
  )
}
