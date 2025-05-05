import { Component, AfterViewInit } from "@angular/core";

@Component({
    selector: "app-sidebar",
    templateUrl: "./sidebar.component.html",
    styleUrls: ["./sidebar.component.css"]
})

export class SidebarComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    const submenuTriggers = document.querySelectorAll('[data-submenu-target]');

    submenuTriggers.forEach((trigger) => {
      trigger.addEventListener('click', (e) => {
        e.preventDefault();

        const targetId = trigger.getAttribute('data-submenu-target');
        const submenu = document.getElementById(targetId!);
        const icon = trigger.querySelector('.bx-chevron-down');

        if (!submenu) return;

        const isOpen = submenu.classList.contains('h-auto');

        if (isOpen) {
          submenu.classList.remove('h-auto');
          submenu.classList.add('h-0');
          icon?.classList.remove('rotate-180');
        } else {
          submenu.classList.remove('h-0');
          submenu.classList.add('h-auto');
          icon?.classList.add('rotate-180');
        }
      });
    });
  }
}
