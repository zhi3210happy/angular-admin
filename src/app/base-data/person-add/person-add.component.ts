import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import 'rxjs/Rx'
import { PersonManageService } from '../person-manage.service';
import { TabControlService } from '../../layout/header/tab/tabControl.service';

declare var $: any;
declare var SweetAlert: any;
declare var Common;

@Component({
    selector: 'app-person-add',
    templateUrl: './person-add.component.html',
    styleUrls: ['./person-add.component.css']
})
export class PersonAddComponent implements OnInit {
    myDate = new Date()
    nowYear = this.myDate.getFullYear();    //获取完整的年份(4位,1970-????)
    nowMonth = this.myDate.getMonth();       //获取当前月份(0-11,0代表1月)
    nowDate = this.myDate.getDate();        //获取当前日(1-31)
    getDate = new Date(this.nowYear, this.nowMonth, this.nowDate)
    minDate = new Date(2010, 0, 1);
    maxDate = new Date(2020, 0, 1);
    myFilter = (d: Date): boolean => {
        const day = d.getDay();
        // Prevent Saturday and Sunday from being selected.
        return day !== 0 && day !== 6;
    }
    public disableForm = false;
    public form: FormGroup;
    public name = new FormControl('', Validators.required);
    public team = new FormControl('', Validators.required);
    public sex = new FormControl('',Validators.required);
    public account = new FormControl('', Validators.required);
    public role = new FormControl('', Validators.required);
    public registerDateCtrl = new FormControl(this.getDate, Validators.required);
    public genders = [
        { value: '0', viewValue: '男' },
        { value: '1', viewValue: '女' }
    ];

    public positionCtrl = new FormControl('',Validators.required);
    filteredPositions: any;
    positions = [
        '队长',
        '副队长',
        '队员',
        '替补'
    ];

    public stateCtrl = new FormControl('',Validators.required);
    filteredStates: any;
    states = [
        'a',
        'ab',
        'abc',
        'abcd',
        'e',
        'f',
        'g',
        'h',
        'i',
        'j',
        'k',
        'l',
        'm',
        'n',
        'o',
        'p',
        'q',
        'r',
        's',
        't'
    ];

    constructor(
        private fb: FormBuilder,
        private tabControlService: TabControlService,
        private personManageService: PersonManageService
    ) {
        this.form = fb.group({
            'name': this.name,
            'team': this.team,
            'sex': this.sex,
            'account': this.account,
            'role': this.role,
            'registerDate': this.registerDateCtrl,
            'position': this.positionCtrl,
            'state': this.stateCtrl
        });
        this.filteredStates = this.stateCtrl.valueChanges
            .startWith(null)
            .map(name => this.filterStates(name));
        this.filteredPositions = this.positionCtrl.valueChanges
            .startWith(null)
            .map(position => this.filterPositions(position));
    }
    ngOnInit() {
        Common.stopLoading();
        console.log(this.getDate)
    }

    filterStates(val: string) {
        return val ? this.states.filter(s => new RegExp(`^${val}`, 'gi').test(s))
            : this.states;
    }

    filterPositions(val: string) {
        return val ? this.positions.filter(p => new RegExp(`^${val}`, 'gi').test(p))
            : this.positions;
    }

    // 确认
    public onSubmit() {
        
        this.personManageService.addPerson(this.form.value).subscribe({
            next: () => {
                console.log(this.form.value)
                SweetAlert.alert('新增人员成功');
                this.personManageService.ref.emit();
    },
            error: () => SweetAlert.warning('发生错误')
        });
    }
    
    // 取消
    cancel() {
        this.tabControlService.closeTab();
    }

    public onDisableForm(formDisabled: boolean) {
        if (formDisabled) {
            this.form.disable();
        } else {
            this.form.enable();
        }
    }

}
