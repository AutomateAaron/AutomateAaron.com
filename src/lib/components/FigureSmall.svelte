<script context="module">
	let counter = 0;
	function getId() {
		return `small-plus-pattern-${counter++}`;
	}
</script>

<script lang="ts">
	let patternId = getId();

	export let rows = 0;
	export let columns = 0;

	let viewBox: string;
	if (rows) {
		columns = columns || rows;
		viewBox = `0 0 ${columns * 16} ${rows * 16}`;
	}
</script>

<svg width="64" height="64" {...$$props} {viewBox}>
	<defs>
		<pattern id={patternId} x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
			<path
				d="M 4 8 L 12 8 M 8 4 L 8 12"
				stroke="currentcolor"
				stroke-width="2"
				shape-rendering="crispEdges"
			/>
		</pattern>
	</defs>
	<rect x="0" y="0" width="100%" height="100%" fill="url(#{patternId})" />
</svg>
<!-- 
<svg width="64" height="64" class="" viewBox="0 0 128 128">
	<defs>
		<pattern
			id="plus-pattern-thick"
			x="0"
			y="0"
			width="32"
			height="32"
			patternUnits="userSpaceOnUse"
		>
			<path d="M 8 16 L 24 16 M 16 8 L 16 24" stroke="#000000" stroke-width="4" />
		</pattern>
	</defs>
	<rect x="0" y="0" width="100%" height="100%" fill="url(#plus-pattern-thick)" />
</svg> -->
