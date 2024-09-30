import { ComponentFixture, TestBed } from "@angular/core/testing";
import { TestableComponent } from "./testable.component";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { TestableModule } from "../testable.module";

describe("group", () => {

    let testableComponent: TestableComponent;
    let fixture: ComponentFixture<TestableComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TestableComponent]
        });
        
        fixture = TestBed.createComponent(TestableComponent);
        testableComponent = fixture.componentInstance;
    });

    it("test1", () => {
        spyOn<any>(testableComponent, 'privateMethod');
        testableComponent.publicMethod();
        expect(2).toEqual(2);
    })
    it("test2", () => {
        expect(1).toEqual(1);
    })
})