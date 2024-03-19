import { component$, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Example } from './react';


export default component$(() => {
  console.log('Qwik Render');
  const selected = useSignal(0);

  return (
    <>
      <Example
        selected={selected.value}
        onSelected$={(v) => (selected.value = v)}
      >
        Selected tab: {selected.value}
      </Example>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
