import { defineComponent, ref, onMounted, onUnmounted } from 'vue';

export default defineComponent({
  name: 'DraggablePanel',
  props: {
    initialX: {
      type: Number,
      default: 80
    },
    initialY: {
      type: Number,
      default: 100
    },
    initialWidth: {
      type: Number,
      default: 360
    },
    initialHeight: {
      type: Number,
      default: 700
    }
  },
  setup(props, { slots }) {
    const panelRef = ref<HTMLElement | null>(null);
    const position = ref({
      x: props.initialX,
      y: props.initialY
    });
    const size = ref({
      width: props.initialWidth,
      height: props.initialHeight
    });
    let isDragging = false;
    let startX = 0;
    let startY = 0;
    let initialPosX = 0;
    let initialPosY = 0;
    let isResizing = false;
    let resizeDirection = '';
    let startResizeX = 0;
    let startResizeY = 0;
    let initialWidth = 0;
    let initialHeight = 0;

    const handleMouseDown = (e: MouseEvent) => {
      if (!panelRef.value) return;
      
      isDragging = true;
      startX = e.clientX;
      startY = e.clientY;
      initialPosX = position.value.x;
      initialPosY = position.value.y;
      
      panelRef.value.style.cursor = 'grabbing';
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging || !panelRef.value) return;

      const deltaX = e.clientX - startX;
      const deltaY = e.clientY - startY;
      
      // 计算新位置
      let newX = initialPosX + deltaX;
      let newY = initialPosY + deltaY;
      
      // 获取窗口尺寸和面板尺寸
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      const panelWidth = panelRef.value.offsetWidth;
      const panelHeight = panelRef.value.offsetHeight;
      
      // 限制x轴范围
      newX = Math.max(0, Math.min(newX, windowWidth - panelWidth));
      // 限制y轴范围
      newY = Math.max(0, Math.min(newY, windowHeight - panelHeight));

      position.value = {
        x: newX,
        y: newY
      };
    };

    const handleMouseUp = () => {
      if (!panelRef.value) return;
      
      isDragging = false;
      panelRef.value.style.cursor = 'grab';
    };

    const handleResizeMouseDown = (e: MouseEvent, direction: string) => {
      e.stopPropagation();
      isResizing = true;
      resizeDirection = direction;
      startResizeX = e.clientX;
      startResizeY = e.clientY;
      initialWidth = size.value.width;
      initialHeight = size.value.height;
      document.body.style.cursor = direction.includes('w') ? 'ew-resize' : 
                                  direction.includes('h') ? 'ns-resize' : 
                                  'nwse-resize';
    };

    const handleResizeMouseMove = (e: MouseEvent) => {
      if (!isResizing || !panelRef.value) return;

      const deltaX = e.clientX - startResizeX;
      const deltaY = e.clientY - startResizeY;

      if (resizeDirection.includes('w')) {
        size.value.width = Math.max(200, initialWidth + deltaX);
      }
      if (resizeDirection.includes('h')) {
        size.value.height = Math.max(200, initialHeight + deltaY);
      }
    };

    const handleResizeMouseUp = () => {
      isResizing = false;
      document.body.style.cursor = 'default';
    };

    onMounted(() => {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('mousemove', handleResizeMouseMove);
      document.addEventListener('mouseup', handleResizeMouseUp);
    });

    onUnmounted(() => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mousemove', handleResizeMouseMove);
      document.removeEventListener('mouseup', handleResizeMouseUp);
    });

    return () => (
      <div
        ref={panelRef}
        class="fixed bg-white rounded-lg shadow-lg cursor-grab relative"
        style={{
          transform: `translate(${position.value.x}px, ${position.value.y}px)`,
          width: `${size.value.width}px`,
          height: `${size.value.height}px`
        }}
        onMousedown={handleMouseDown}
      >
        {slots.default?.()}
        <div class="absolute inset-0 pointer-events-none">
          <div class="absolute right-0 top-0 bottom-0 w-2 cursor-ew-resize pointer-events-auto"
               onMousedown={(e) => handleResizeMouseDown(e, 'w')} />
          <div class="absolute left-0 right-0 bottom-0 h-2 cursor-ns-resize pointer-events-auto"
               onMousedown={(e) => handleResizeMouseDown(e, 'h')} />
          <div class="absolute right-0 bottom-0 w-4 h-4 cursor-nwse-resize pointer-events-auto"
               onMousedown={(e) => handleResizeMouseDown(e, 'wh')} />
        </div>
      </div>
    );
  }
}); 