<script>
    export let direction;
</script>

<div class={direction}></div>

<style>
    .right {
      width: 0;
      height: 0;
      border-top: 10px solid transparent;
      border-bottom: 10px solid transparent;
      border-left: 20px solid #000;
    }

    .left {
      width: 0;
      height: 0;
      border-top: 10px solid transparent;
      border-bottom: 10px solid transparent;
      border-right: 20px solid #000;
    }
  </style>