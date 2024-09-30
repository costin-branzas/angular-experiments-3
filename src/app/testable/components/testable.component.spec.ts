import { TestBed } from "@angular/core/testing";
import { TestableComponent } from "./testable.component";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { TestableModule } from "../testable.module";

describe("group", () => {

    let testableComponent: TestableComponent;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                BrowserModule,
                HttpClientModule,
                TestableModule
              ]
        }).compileComponents();
        
        testableComponent = TestBed.createComponent(TestableComponent).componentInstance;
        
    });

    it("test1", () => {
        testableComponent.publicMethod();
        expect(2).toEqual(2);
    })
    it("test2", () => {
        expect(1).toEqual(1);
    })
})