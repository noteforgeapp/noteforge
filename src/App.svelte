<script>
  import NoteContainer from "$lib/NoteContainer.svelte";
  import TrackBar from "$lib/TrackBar.svelte";
  import { AppShell } from "@skeletonlabs/skeleton";
</script>



<AppShell slotPageContent="flex">
	<svelte:fragment slot="header">Header</svelte:fragment>
  <div class="flex overflow-auto flex-grow">
    <TrackBar/>
    <NoteContainer/>
  </div>
	<svelte:fragment slot="footer">Footer</svelte:fragment>
</AppShell>