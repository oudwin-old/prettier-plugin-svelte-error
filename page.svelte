      
      <Tabs.List
        class="flex justify-start space-x-2 border-b border-border bg-transparent"
      >
        {#if FeatureFlags.isFeatureEnabled(FEATURE_FLAGS.TRACKING_SENSORS)}
          <Tabs.Trigger asChild value={SETTINGPAGES.TRACKING}>
            <Button
              variant="link"
              class="{`text-md rounded-none border-b-2 transition-all hover:border-white hover:no-underline  ${curPage !== SETTINGPAGES.TRACKING ? 'border-transparent' : 'border-white'}`}"
              on:click={() => (curPage = SETTINGPAGES.TRACKING)}
            >
              Ground Segment
            </Button>
          </Tabs.Trigger>
        {/if}
        <Tabs.Trigger asChild value={SETTINGPAGES.SPACECRAFT}>
          <Button
            variant="link"
            class={`text-md rounded-none border-b-2 transition-all hover:border-white hover:no-underline  ${curPage !== SETTINGPAGES.SPACECRAFT ? 'border-transparent' : 'border-white'}`}
            on:click={() => (curPage = SETTINGPAGES.SPACECRAFT)}
          >
            Spacecraft
          </Button>
        </Tabs.Trigger>
      </Tabs.List>
